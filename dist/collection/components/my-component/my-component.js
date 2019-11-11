import { h } from "@stencil/core";
export class MyComponent {
    render() {
        return h("div", null,
            "HEADER",
            h("br", null),
            "SLOT GOES HERE (",
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
}
