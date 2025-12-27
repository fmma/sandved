import { html, LitElement } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { media, db } from '@fmma-npm/http-client';

const DB_KEY = 'sf2026_images';

type ImageRecord = { image_id: string };

@customElement('sf-media')
export class sf_media extends LitElement {
    renderRoot = this;

    @query('input[type="file"]')
    file_input!: HTMLInputElement;

    @state()
    private _uploaded_files: string[] = [];

    @state()
    private _loading = false;

    @state()
    private _load_progress: { max: number, loaded: number } = { max: 0, loaded: 0 };

    constructor() {
        super();
        this._load_media();
    }

    private async _load_media() {
        const images = await db.getAppendObject<ImageRecord>(DB_KEY);
        this._uploaded_files = [...new Set(images.map(image => image.image_id))];
    }

    render() {
        const render_img = (file: string) => {


            if (file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.ogg') || file.endsWith('.mov') || file.endsWith('.avi') || file.endsWith('.mkv') || file.endsWith('.flv') || file.endsWith('.wmv') || file.endsWith('.mpeg') || file.endsWith('.mpg') || file.endsWith('.3gp') || file.endsWith('.m4v') || file.endsWith('.ts') || file.endsWith('.vob')) {
                const ext = file.split('.').pop()!;
                const vformat_map: Record<string, string | undefined> = {
                    'mp4': 'mp4',
                    'webm': 'webm',
                    'ogg': 'ogg',
                    'mov': 'mp4',
                    'avi': 'avi',
                    'mkv': 'mkv',
                    'flv': 'flv',
                    'mpeg': 'mpeg',
                    'mpg': 'mpeg',
                    '3gp': '3gp',
                    'm4v': 'mp4',
                    'ts': 'ts',
                    'vob': 'vob'
                };
                const vtype = vformat_map[ext] || 'mp4';

                return html`
    <div style="width: 100%;">
        <video controls playsinline loop preload="none" style="width: 100%; height: auto; display: block;">
            <source src="https://snesl.dk/media/${file}#t=0.001" type="video/${vtype}">
            Din browser understøtter ikke videoafspilning af denne type.
        </video>
    </div>
                `;
            }
            if( file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.gif') || file.endsWith('.bmp') || file.endsWith('.webp') || file.endsWith('.svg')) {
                return html`
                    <div>
                        <img src="https://snesl.dk/media/${file}" alt="${file}" style="max-width: 100%;" loading="lazy">
                    </div>
                `;
            }
            else if( file.endsWith('.HEIC') ) {
                return html``;
            }
            return html`
                <div>
                    <a href="https://snesl.dk/media/${file}" download>${file}</a>
                </div>
            `;
        }

        let button = html`
        <button @click=${() => this._upload_files()}>Upload</button>
        `;

        if (this._loading) {
            button = html`
            <button>
                <span class="sf-spinner" aria-label="Uploader..."></span>
                <span> Uploader... (${this._load_progress.loaded}/${this._load_progress.max})</span>
                </button>
            `;
        }
        return html`
        <div class="sf-content">
            <h3>Billeder og Videoer</h3>
            <input .disabled=${this._loading} type="file" multiple>
            <p>${button}</p>
            <p>Upload billeder og videoer fra festivalen. Disse vil blive vist her, så alle kan se dem.</p>
            <p>Billeder og videoer bliver uploaded i fuld opløsning, så det kan tage lidt tid afhængigt af din internetforbindelse.</p>

            ${this._uploaded_files.reverse().map(render_img)}
        </div>
        `;
    }

    private async _upload_files() {
        const files = this.file_input.files;
        if (files && files.length > 0) {
            this._load_progress = { max: files.length, loaded: 0 };
            this._loading = true;
            for (const [index, file] of [...files].entries()) {
                let fileToUpload = file;
                let fileName = file.name;
                
                if (file.name.toLowerCase().endsWith('.heic')) {
                    try {
                        const { default: heic2any } = await import('heic2any');
                        const convertedBlob = await heic2any({
                            blob: file,
                            toType: 'image/png'
                        }) as Blob;
                        fileToUpload = new File([convertedBlob], fileName.replace(/\.heic$/i, '.png'), {
                            type: 'image/png'
                        });
                        fileName = fileName.replace(/\.heic$/i, '.png');
                    } catch (error) {
                        console.error('Failed to convert HEIC file:', error);
                    }
                }
                
                const image_id = await media.put(fileToUpload, fileName);
                console.log(`Uploaded ${fileName} with ID: ${image_id}`);
                await db.appendObject<ImageRecord>(DB_KEY, { image_id });
                this._load_progress = { max: files.length, loaded: index + 1 };
            }
            await this._load_media();
            this.file_input.value = '';
            this._loading = false;
        } else {
            alert('No files selected for upload.');
        }
    }
}