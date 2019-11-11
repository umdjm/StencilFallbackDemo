'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-b5bce73a.js');

const MyComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return core.h("div", null, "HEADER", core.h("br", null), "SLOT GOES HERE (", core.h("slot", null), ")", core.h("br", null), "FOOTER");
    }
    static get style() { return ""; }
};

exports.my_component = MyComponent;
