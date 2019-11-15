import { r as registerInstance, h, c as getElement } from './core-7fbd3457.js';
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.handleChildrenChange = function () {
            _this.host.forceUpdate();
        };
    }
    MyComponent.prototype.connectedCallback = function () {
        this.observer = new MutationObserver(this.handleChildrenChange);
        this.observer.observe(this.host, { childList: true });
    };
    MyComponent.prototype.render = function () {
        return h("div", null, "HEADER", h("br", null), "SLOT (", h("slot", null), ")", h("br", null), "FOOTER");
    };
    Object.defineProperty(MyComponent.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}());
export { MyComponent as my_component };
