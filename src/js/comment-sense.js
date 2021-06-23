import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
let CS = class CS extends LitElement {
    constructor() {
        super();
        this.isLoading = true;
        this.senses = [];
        toxicity.load(0.75).then(tmodel => {
            this.model = tmodel;
            this.isLoading = false;
        });
    }
    submit() {
        if (this.isLoading || this.input.value.length === 0) {
            return;
        }
        this.isLoading = true;
        this.senses = [];
        this.requestUpdate();
        this.model.classify(this.input.value).then(predictions => {
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
            this.isLoading = false;
            this.requestUpdate();
        });
    }
    reset() {
        this.input.value = "";
        this.senses = [];
        this.requestUpdate();
    }
    enter(e) {
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
            <sl-input pill label="Comment:" placeholder="Your comment goes here." @keyup=${this.enter}></sl-input>
            <sl-button pill size="small" type="primary" @click=${this.submit} ?loading=${this.isLoading}>Submit</sl-button>
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