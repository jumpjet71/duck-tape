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
         * The total number of available pages.
         */
        this.total = (size > 0 ? Math.ceil(totalCount / size) : 1);
        /**
         * The number of items being returned.
         */
        this.size = (size > 0 ? size : 10);
        /**
         * The name of the property that is being sorted.
         */
        this.sort = sort;
        /**
         * Set descending or ascending array sort order.
         * A value of “true” means ascending order.
         */
        this.order = (typeof order === 'boolean' ? order : true);
        /**
         * The number of the current page. Is always nonnegative, and equal or less than total.
         */
        this.current = (current > 0 ? current : 1);
        /**
         * The total number of available elements.
         */
        this.totalCount = totalCount;
        /**
         * Is true if there is a previous page.
         */
        this.hasPreviousPage = (this.current - 1) > 0;
        /**
         * Is true if there is a next page.
         */
        this.hasNextPage = (this.current + 1<= this.total);
    };

    return {

        create: function (size, sort, order, current, totalCount) {

            return new Envelope(size, sort, order, current, totalCount);
        }
    };
})();