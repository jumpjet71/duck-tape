
exports.emptyFieldUtils = (function () {
    'use strict';

    var _ = require('underscore');

    return {

        removeEmpty : function (model) {

            _.each(model, function (value, key) {

                if (!value) {

                    delete model[key];
                }
            });

            return model;
        }
    };
})();