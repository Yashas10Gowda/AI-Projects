import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let WII = class WII extends LitElement {
    render() {
        return html `
        <div class="tinit-center">
            <p>To detect what the object is!... digitally
                <br>
                <small>This might help you ;)</small>
            </p>
            <br>
            <sl-input label="Photo:" accept="image/*" type="file" placeholder="Your photo goes here."></sl-input>
            <div class="center">
                <sl-button size="small" type="primary">Submit</sl-button>
                <sl-button size="small" type="default">Reset</sl-button>
            </div>
            <br>
            <br>
            <slot name="label">Detected:</slot>
            <br>
            <sl-tag type="danger">Danger</sl-tag>
            <sl-tag type="success">Success</sl-tag>
        </div>

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
WII = __decorate([
    customElement('what-is-it')
], WII);
export { WII };
//# sourceMappingURL=what-is-it.js.map