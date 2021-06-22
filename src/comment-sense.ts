import { LitElement, html, css, nothing, Template } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
declare var tf: any;
declare var toxicity: any;

@customElement('comment-sense')
export class CS extends LitElement {
    @state()
    protected model;

    constructor() {
        super();
        toxicity.load(0.75).then(tmodel => {
            this.model = tmodel;
            this.loading = false;
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

    comment: string = '';
    loading: boolean = true;
    senses: any = [];
    @query('sl-input')
    input!: HTMLInputElement;

    submit() {
        this.loading = true;
        this.senses = [];
        this.requestUpdate();
        this.model.classify(this.comment).then(predictions => {
            let atleastOneExists: boolean = false;
            predictions.forEach((prediction) => {
                if (prediction.results[0].match) {
                    atleastOneExists = true;
                    this.senses.push(html`<sl-tag pill type = "danger">${(prediction.label as string).toUpperCase()}</sl-tag>`);
                }
            });
            if (!atleastOneExists) {
                this.senses.push(html`<sl-tag pill type ="success">No Toxicity Detected</sl-tag>`);
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

    changed() {
        this.comment = this.input.value;
    }

    render() {
        return html`
        <div class="tinit-center">
            <p>Before you comment verbally or digitally make sure it's
                not
                toxic!
                <br>
                <small>For assistance use Artificial Intelligence ;)</small>
            </p>
            <br>
            <sl-input pill label="Comment:" placeholder="Your comment goes here." @input=${this.changed}></sl-input>
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
}