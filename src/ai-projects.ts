import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ai-projects')
export class AiProjects extends LitElement {
    @property({ type: String }) title = 'My app';

    static styles = css``;

    render() {
        return html`
            <h1>Hello World</h1>
        `;
    }
}
