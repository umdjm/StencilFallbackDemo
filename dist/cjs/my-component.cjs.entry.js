'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-aee25661.js');

const MyComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.handleChildrenChange = () => {
            this.host.forceUpdate();
        };
    }
    connectedCallback() {
        this.observer = new MutationObserver(this.handleChildrenChange);
        this.observer.observe(this.host, { childList: true });
    }
    render() {
        return core.h("div", null, "HEADER", core.h("br", null), "SLOT (", core.h("slot", null), ")", core.h("br", null), "FOOTER");
    }
    get host() { return core.getElement(this); }
    static get style() { return ""; }
};

exports.my_component = MyComponent;
