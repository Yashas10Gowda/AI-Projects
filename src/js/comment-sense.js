import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let CS = class CS extends LitElement {
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
            <sl-input label="Comment:" help-text="Could be a sentence or a word." placeholder="Your comment goes here."></sl-input>
            <div class="center">
                <sl-button size="small" type="primary">Submit</sl-button>
                <sl-button size="small" type="default">Reset</sl-button>
            </div>
            <br>
            <br>
            <slot name="label">Sense:</slot>
            <br>
            <sl-tag type="danger">Danger</sl-tag>
            <sl-tag type="success">Success</sl-tag>
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
        }
        sl-input{
            margin: 15px 0;
        }
        .center{
            text-align:center;
        }
        sl-tag{
            margin-top: 2px;
        }
    `;
CS = __decorate([
    customElement('comment-sense')
], CS);
export { CS };
//# sourceMappingURL=comment-sense.js.map