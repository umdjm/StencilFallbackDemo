System.register(['./core-41b05a1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                getElement = module.c;
            }],
        execute: function () {
            var MyComponent = exports('my_component', /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.handleChildrenChange = function () {
                        _this.host.forceUpdate();
                    };
                }
                class_1.prototype.connectedCallback = function () {
                    this.observer = new MutationObserver(this.handleChildrenChange);
                    this.observer.observe(this.host, { childList: true });
                };
                class_1.prototype.render = function () {
                    return h("div", null, "HEADER", h("br", null), "SLOT (", h("slot", null), ")", h("br", null), "FOOTER");
                };
                Object.defineProperty(class_1.prototype, "host", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ""; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
