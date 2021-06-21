import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('pa-que-ans')
export class PQA extends LitElement {

    static styles = css`
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
    `;

    render() {
        return html`
        <div class="tinit-center">
            <p>Lazy enough to find an answer to a question from a
                paragraph? Don't
                Worry this got you covered
                <br>
                <small>Enter a paragraph and a question related to it, you
                    MIGHT get an answer.</small>
            </p>
            <br>
            <sl-textarea placeholder="Your paragraph goes here." label="Paragraph:"></sl-textarea>
            <sl-input label="Question:" placeholder="Your question goes here."></sl-input>
            <div class="center">
                <sl-button size="small" type="primary">Submit</sl-button>
                <sl-button size="small" type="default">Reset</sl-button>
            </div>
            <br>
            <sl-input label="Answer:" readonly placeholder="Detected answer will appear here."></sl-input>
        </div>

        `;
    }
}