import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
let PQA = class PQA extends LitElement {
    constructor() {
        super();
        this.isLoading = true;
        qna.load().then(qmodel => {
            this.model = qmodel;
            this.isLoading = false;
        });
    }
    submit() {
        if (this.isLoading || this.paragraph.value.length === 0 || this.question.value.length === 0) {
            return;
        }
        this.isLoading = true;
        this.answer.value = "";
        this.requestUpdate();
        this.model.findAnswers(this.question.value, this.paragraph.value).then(answers => {
            if (answers.length !== 0) {
                this.answer.value = answers[0].text;
            }
            else {
                this.answer.value = 'Oops can\'t help you with that.';
            }
            this.isLoading = false;
            this.requestUpdate();
        });
    }
    reset() {
        this.paragraph.value = "";
        this.question.value = "";
        this.answer.value = "";
    }
    enter(e) {
        if (e.key === 'Enter') {
            this.submit();
        }
    }
    render() {
        return html `
        <div class="tinit-center">
            <p>Lazy enough to find an answer to a question from a
                paragraph? Don't
                Worry this got you covered
                <br>
                <small>Enter a paragraph and a question related to it, you
                    MIGHT get an answer.</small>
            </p>
            <br>
            <sl-textarea id="txtarea" rows=2 resize="auto" placeholder="Your paragraph goes here." label="Paragraph:"></sl-textarea>
            <sl-input pill id="question" label="Question:" placeholder="Your question goes here." @keyup=${this.enter}></sl-input>
            <div class="center">
                <sl-button pill size="small" type="primary" @click=${this.submit} ?loading=${this.isLoading}>Submit</sl-button>
                <sl-button pill size="small" type="default" @click=${this.reset}>Reset</sl-button>
            </div>
            <br>
            <sl-input pill id="answer" label="Answer:" readonly placeholder="Detected answer will appear here."></sl-input>
        </div>

        `;
    }
};
PQA.styles = css `
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
        #txtarea::part(base){
            border-radius: var(--sl-input-height-medium);
        }
        #txtarea::part(label),#question::part(label),#answer::part(label){
            margin-left:var(--sl-spacing-medium);
        }
    `;
__decorate([
    state()
], PQA.prototype, "model", void 0);
__decorate([
    query('#txtarea')
], PQA.prototype, "paragraph", void 0);
__decorate([
    query('#question')
], PQA.prototype, "question", void 0);
__decorate([
    query('#answer')
], PQA.prototype, "answer", void 0);
PQA = __decorate([
    customElement('pa-que-ans')
], PQA);
export { PQA };
//# sourceMappingURL=pa-que-ans.js.map