import Ember from 'ember';

export default Ember.Component.extend({
    allPageSizes: [
        { value: 10, text: 'Show 10'},
        { value: 50, text: 'Show 50'}],

    pagesArray: [{text: '1', className: ''}], // hold the pagination number sequence
    keepPageNumber: false, // due to a condition when user was in high page number, but change other filters (e.g. type or status) that leaves empty model

    init() {
        this._super(...arguments);
        this._createPages();
    },

    //// we need to watch whenever the pagination array changes (either add/remove new pages, or change active state
    //pages: Ember.computed('pagesArray.@each.className', function() {
    //    return this.get('pagesArray');
    //}),
    //
    //// this value could be set by the page size select drop down
    //decoratedPageSize: Ember.computed("pageSize", {
    //    get: function() {
    //        return "Show " + this.get('pageSize');
    //    },
    //
    //    set: function(key, value, previousValue) {
    //        if (value) {
    //            if (value !== previousValue) {
    //                this.set('pageSize', value.substring(5, 7));
    //                this.set('pageNumber', 1);
    //            }
    //        } else {
    //            this.set('pageSize', 10);
    //        }
    //        return value;
    //    }
    //}),

    isLeftArrowDisabled: Ember.computed('queryCount', 'pageSize', 'pageNumber', function() {
        // when there is only one page, we disable the left and right button
        let self = this;

        if (self.get('queryCount') / self.get('pageSize') <= 1) {
            return "disabled";
        } else if (self.get('pageNumber') === 1) {
            return "disabled";
        } else {
            return "";
        }
    }),

    isRightArrowDisabled: Ember.computed('queryCount', 'pageSize', 'pageNumber', function() {
        // when there is only one page, we disable the left and right button
        let self = this;

        if (self.get('queryCount') / self.get('pageSize') <= 1) {
            return "disabled";
        } else if (self.get('pageNumber') === self.get('pagesArray').length) {
            return "disabled";
        } else {
            return "";
        }
    }),

    pageSizeChanged: Ember.observer('pageSize', function() {
        this._createPages();
    }),

    queryCountChanged: Ember.observer('queryCount', function() {
        this._createPages();
    }),

    // Two states change could trigger new pages generation
    // 1. When queryCount is changed
    // 2. When pageSize is changed
    // queryCount change is initiated from outside of component
    // pageSize change could be initiated from inside (from the drop down) or from outside (query parameters)
    _createPages() {
        let self = this,
            size = Math.floor(self.get('queryCount') / self.get('pageSize')) + 1,
            range = Array(size),
            pagesArray = self.get('pagesArray');

        pagesArray.clear();
        let i = 1;
        for (i = 1; i <= range.length; i++) {
            var obj = Ember.Object.create({text: i, className: self.get('pageNumber') === i ? "active": ""});
            pagesArray.pushObject(obj);
        }
    },

    // highlight the selected page number
    _markPaginationActive: function(pageNumber) {
        let self = this,
            array = self.get('pagesArray');

        array.forEach(function(item) {
            if (item.text === pageNumber) {
                item.set("className", "active");
            } else {
                item.set("className", "");
            }
        });
    },

    actions: {
        loadByPageNumber: function (newPageNumber) {
            var self = this;

            if (newPageNumber !== self.get('pageNumber')) {
                self.set('pageNumber', newPageNumber);
                self.set('keepPageNumber', true);
                self._markPaginationActive(newPageNumber);
            }
        },

        loadNextPage: function () {
            var self = this;

            self.set('keepPageNumber', true);
            self._markPaginationActive(self.incrementProperty('pageNumber'));
        },

        loadPrevPage: function () {
            var self = this;

            self.set('keepPageNumber', true);
            self._markPaginationActive(self.decrementProperty('pageNumber'));
        }
    }
});
