import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
let WII = class WII extends LitElement {
    constructor() {
        super();
        this.isLoading = true;
        this.imagelink = '';
        this.predictions = [];
        mobilenet.load().then((mmodel) => {
            this.model = mmodel;
            this.isLoading = false;
        });
    }
    change(e) {
        let file = e.target.files[0];
        this.imagelink = window.URL.createObjectURL(file);
        this.requestUpdate();
    }
    submit() {
        if (this.isLoading) {
            return;
        }
        this.isLoading = true;
        this.predictions = [];
        this.requestUpdate();
        this.model.classify(this.img).then(predictions => {
            let atleastOneExists = false;
            predictions.forEach((prediction) => {
                atleastOneExists = true;
                this.predictions.push(html `<sl-tag pill type = "success">${prediction.className.toUpperCase()}</sl-tag>`);
            });
            if (!atleastOneExists) {
                this.predictions.push(html `<sl-tag pill type ="danger">Nothing Detected</sl-tag>`);
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
        return html `
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
                <sl-button pill size="small" type="primary" @click=${this.submit} ?disabled=${this.imagelink === ''} ?loading=${this.isLoading}>Submit</sl-button>
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
};
WII.styles = css `
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
__decorate([
    state()
], WII.prototype, "model", void 0);
__decorate([
    query('img')
], WII.prototype, "img", void 0);
WII = __decorate([
    customElement('what-is-it')
], WII);
export { WII };
//# sourceMappingURL=what-is-it.js.map