import { r as registerInstance, h, c as getElement } from './core-4ff02c91.js';

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleChildrenChange = () => {
            this.host.forceUpdate();
        };
    }
    connectedCallback() {
        this.observer = new MutationObserver(this.handleChildrenChange);
        this.observer.observe(this.host, { childList: true });
    }
    render() {
        return h("div", null, "HEADER", h("br", null), "SLOT (", h("slot", null), ")", h("br", null), "FOOTER");
    }
    get host() { return getElement(this); }
    static get style() { return ""; }
};

export { MyComponent as my_component };
