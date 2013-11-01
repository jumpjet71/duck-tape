/**
 * Take in an array of model property names, and return a populated
 * model based on the request body or request query parameters.
 *
 * @class paramFieldUtils
 * @module javascript.utils
 *
 */
exports.paramFieldUtils = (function () {
    'use strict';

    var _ = require('underscore');

    return {

        /**
         * Read an array of model object properties, and use Express J request.query and request.body
         * to create a model object needed for data access requests.
         *
         * @method processParameters
         * @param modelDefinition
         * @param request Express JS request object.
         * @returns {Object} model The model object needed for data access requests.
         */
        processParameters: function (modelDefinition, request) {

            var model = {};

            _.each(modelDefinition, function (value) {

                model[value] = (function () {
                    var result;

                    if (request.body[value]) {
                        result = request.body[value];
                    }
                    else if (request.query[value]) {
                        result = request.query[value];
                    }

                    return result;
                })();

                if (!model[value]) {
                    delete model[value];
                }
            });

            return model;
        }
    };
})();