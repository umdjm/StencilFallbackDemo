import { r as registerInstance, h } from './core-b9616fb9.js';

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("div", null, "HEADER", h("br", null), "SLOT GOES HERE (", h("slot", null), ")", h("br", null), "FOOTER");
    }
    static get style() { return ""; }
};

export { MyComponent as my_component };
