import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('comment-sense')
export class CS extends LitElement {
    static styles = css`
        p{
            text-align:center;
        }
        .tinit-center{
            max-width:500px;
            margin: 0 auto;
        }
        sl-input{
            margin: 10px 0;
        }
    `;

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
            <br>
            <sl-input label="Comment" help-text="Could be a sentence or a word." placeholder="Your comment goes here."></sl-input>
            <sl-button size="small" type="primary">Submit</sl-button>
            <sl-button size="small" type="default">Reset</sl-button>
        </div>
        `;
    }
}