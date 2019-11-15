System.register(['./core-41b05a1d.system.js'], function () {
    'use strict';
    var patchBrowser, globals, bootstrapLazy;
    return {
        setters: [function (module) {
                patchBrowser = module.p;
                globals = module.g;
                bootstrapLazy = module.b;
            }],
        execute: function () {
            patchBrowser().then(function (options) {
                globals();
                return bootstrapLazy([["my-component.system", [[1, "my-component"]]]], options);
            });
        }
    };
});
