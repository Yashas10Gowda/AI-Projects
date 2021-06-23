import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
let CS = class CS extends LitElement {
    constructor() {
        super();
        this.comment = '';
        this.loading = true;
        this.senses = [];
        toxicity.load(0.75).then(tmodel => {
            this.model = tmodel;
            this.loading = false;
        });
    }
    submit() {
        if (this.loading || this.comment.length === 0) {
            return;
        }
        this.loading = true;
        this.senses = [];
        this.requestUpdate();
        this.model.classify(this.comment).then(predictions => {
            let atleastOneExists = false;
            predictions.forEach((prediction) => {
                if (prediction.results[0].match) {
                    atleastOneExists = true;
                    this.senses.push(html `<sl-tag pill type = "danger">${prediction.label.toUpperCase()}</sl-tag>`);
                }
            });
            if (!atleastOneExists) {
                this.senses.push(html `<sl-tag pill type ="success">No Toxicity Detected</sl-tag>`);
            }
            this.loading = false;
            this.requestUpdate();
        });
    }
    reset() {
        this.input.value = "";
        this.comment = "";
        this.senses = [];
        this.requestUpdate();
    }
    changed(e) {
        this.comment = this.input.value;
        if (e.key === 'Enter') {
            this.submit();
        }
    }
    render() {
        return html `
        <div class="tinit-center">
            <p>Before you comment verbally or digitally make sure it's
                not
                toxic!
                <br>
                <small>For assistance use Artificial Intelligence ;)</small>
            </p>
            <br>
            <sl-input pill label="Comment:" placeholder="Your comment goes here." @keyup=${this.changed}></sl-input>
            <sl-button pill size="small" type="primary" @click=${this.submit} ?loading=${this.loading}>Submit</sl-button>
            <sl-button pill size="small" type="default" @click=${this.reset}>Reset</sl-button>        
            <br>
            <br>
            <br>
            <slot name="label">Sense:</slot>
            <br>
            ${this.senses}
        </div>
        `;
    }
};
CS.styles = css `
        p{
            text-align:center;
        }
        .tinit-center{
            max-width:500px;
            margin: 0 auto;
            text-align:center;
        }
        sl-input{
            margin: 5px 0;
        }
        .center{
            text-align:center;
        }
        sl-tag{
            margin: 2px 2px;
        }
    `;
__decorate([
    state()
], CS.prototype, "model", void 0);
__decorate([
    query('sl-input')
], CS.prototype, "input", void 0);
CS = __decorate([
    customElement('comment-sense')
], CS);
export { CS };
//# sourceMappingURL=comment-sense.js.map