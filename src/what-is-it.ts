import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
declare var mobilenet: any;

@customElement('what-is-it')
export class WII extends LitElement {
    @state()
    protected model;

    constructor() {
        super();
        mobilenet.load().then((mmodel) => {
            this.model = mmodel;
            this.isLoading = false;
        });
    }

    static styles = css`
        p{
            text-align:center;
        }
        .tinit-center{
            max-width:500px;
            margin: 0 auto;
            text-align:center;
        }
        .center{
            text-align:center;
        }
        sl-tag{
            margin : 2px 2px;
        }
        input,img{
            display:none;
        }
    `;

    @query('img')
    img!: HTMLImageElement;
    isLoading: boolean = true;
    imagelink: string = '';
    predictions: unknown[] = [];

    change(e: Event) {
        let file = ((e.target as HTMLInputElement).files as FileList)[0];
        this.imagelink = window.URL.createObjectURL(file);
        this.requestUpdate();
    }

    submit() {
        if (this.isLoading || this.imagelink === "") {
            return;
        }
        this.isLoading = true;
        this.predictions = [];
        this.requestUpdate();
        this.model.classify(this.img).then(predictions => {
            let atleastOneExists: boolean = false;
            predictions.forEach((prediction) => {
                atleastOneExists = true;
                this.predictions.push(html`<sl-tag pill type = "success">${(prediction.className as string).toUpperCase()}</sl-tag>`);
            });
            if (!atleastOneExists) {
                this.predictions.push(html`<sl-tag pill type ="danger">Nothing Detected</sl-tag>`);
            }
            this.isLoading = false;
            this.requestUpdate();
        });
    }

    reset() {
        this.imagelink = '';
        this.predictions = [];
        this.requestUpdate();
    }

    render() {
        return html`
        <div class="tinit-center">
            <p>To detect what the object is!... digitally
                <br>
                <small>This might help you ;)</small>
            </p>
            <br>
                <label for="photo">
                    <sl-tag pill size="large" type="primary"><sl-icon id="icon" name="link-45deg"></sl-icon> Select An Image</sl-tag>
                    <sl-avatar image="${this.imagelink}" shape="rounded"><sl-icon slot="icon" name="image"></sl-icon></sl-avatar>
                </label>
                <input id="photo" type="file" accept="image/*" @change=${this.change}>
            <div class="center">
                <sl-button pill size="small" type="primary" @click=${this.submit} ?loading=${this.isLoading}>Submit</sl-button>
                <sl-button pill size="small" type="default" @click=${this.reset}>Reset</sl-button>
            </div>
            <br>
            <br>
            <slot name="label">Predictions:</slot>
            <br>
            ${this.predictions}
        </div>
        <img src=${this.imagelink}>
        `;
    }
}