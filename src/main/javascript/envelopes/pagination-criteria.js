/**
 * The paging and sorting criteria for JSON response.
 *
 * @class successFullListResponse
 * @module javascript.envelopes
 */
exports.paginationCriteria = (function () {
    'use strict';

    var Envelope = function (size, sort, order, current, totalCount) {

        /**
         * The total number of available pages using the current size.
         */
        this.total = null;
        /**
         * The number of items being returned.
         */
        this.size = size;
        /**
         * The name of the property that is being sorted.
         */
        this.sort = sort;
        /**
         * Set descending or ascending array sort order.
         * A value of “true” means ascending order.
         */
        this.order = order;
        /**
         * The number of the current page. Is always nonnegative, and equal or less than total.
         */
        this.current = current;
        /**
         * The total number of available elements.
         */
        this.totalCount = totalCount;
        /**
         * Is true if there is a previous page.
         */
        this.hasPreviousPage = (function () {
        })();
        /**
         * Is true if there is a next page.
         */
        this.hasNextPage = null;
    };

    return {

        create: function (size, sort, order, current, totalCount) {

            return new Envelope(size, sort, order, current, totalCount);
        }
    };
})();