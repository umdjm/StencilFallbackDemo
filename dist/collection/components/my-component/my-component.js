import { h } from "@stencil/core";
export class MyComponent {
    constructor() {
        this.handleChildrenChange = () => {
            this.host.forceUpdate();
        };
    }
    connectedCallback() {
        this.observer = new MutationObserver(this.handleChildrenChange);
        this.observer.observe(this.host, { childList: true });
    }
    render() {
        return h("div", null,
            "HEADER",
            h("br", null),
            "SLOT (",
            h("slot", null),
            ")",
            h("br", null),
            "FOOTER");
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get elementRef() { return "host"; }
}
