import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './comment-sense.js';
import './pa-que-ans.js';
import './what-is-it.js';

@customElement('ai-projects')
export class AiProjects extends LitElement {

  static styles = css`
    div{
      font-family: var(--sl-font-sans);
      color: var(--sl-color-gray-600);
    }
    h2{
      text-align: center;
      font-size: var(--sl-font-size-x-large);
      color: var(--sl-color-primary-500);
      font-weight:400;
    }
    .tab-grp::part(tabs){
      justify-content:center;
    }
  `;

  render() {
    return html`
    <div>
      <h2>AI-Projects</h2>
      <sl-tab-group class="tab-grp">
        <sl-tab slot="nav" panel="pqa">PaQueAns&nbsp;<sl-icon name="book"></sl-icon></sl-tab>
        <sl-tab active slot="nav" panel="cs">CommentSense&nbsp;<sl-icon name="chat-square-text"></sl-icon></sl-tab>
        <sl-tab slot="nav" panel="wii">What-Is-It&nbsp;<sl-icon name="camera"></sl-icon></sl-tab>
        <sl-tab-panel name="pqa"><pa-que-ans></pa-que-ans></sl-tab-panel>
        <sl-tab-panel name="cs"><comment-sense></comment-sense></sl-tab-panel>
        <sl-tab-panel name="wii"><what-is-it></what-is-it></sl-tab-panel>
      </sl-tab-group>
    </div>`;
  }
}
