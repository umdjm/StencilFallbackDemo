import { r as registerInstance, h } from './core-b9616fb9.js';
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyComponent.prototype.render = function () {
        return h("div", null, "HEADER", h("br", null), "SLOT GOES HERE (", h("slot", null), ")", h("br", null), "FOOTER");
    };
    Object.defineProperty(MyComponent, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}());
export { MyComponent as my_component };
