import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let AiProjects = class AiProjects extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'My app';
    }
    render() {
        return html ``;
    }
};
AiProjects.styles = css ``;
__decorate([
    property({ type: String })
], AiProjects.prototype, "title", void 0);
AiProjects = __decorate([
    customElement('ai-projects')
], AiProjects);
export { AiProjects };
//# sourceMappingURL=ai-projects.js.map