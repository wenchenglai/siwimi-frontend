import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        period: {
            refreshModel: true
        },

        type: {
            refreshModel: true
        },

        distance: {
            refreshModel: true
        },

        ageGroup: {
            refreshModel: true
        },

        isFree: {
            refreshModel: true
        },

        queryText: {
            refreshModel: false
        },

        pageNumber: {
            refreshModel: true
        },

        pageSize: {
            refreshModel: true
        }
    },

    model(params) {
        let self = this;

        return self.store.query('event', Ember.merge(params, {
            //stage: "Approved"
        }));
    },

    afterModel (model) {
        // it's possible that user is at page 5, but it's empty because there are not enough data
        if (model.get('length') === 0) {
            this.transitionTo({queryParams: {pageNumber: 1}});
        }
    },

    setupController (controller, model) {
        this._super(controller, model);

        // we get the total item count so we can generate the right pagination.
        if (model.get('length') > 0) {
            // back end will populate field 'queryCount' on the first object so we know how many items in total for this particular query
            // We need the total in order to make the pagination right.
            var totalRecordCount = model.get('firstObject').get('queryCount');
            if (totalRecordCount !== controller.get('queryCount')) {
                controller.set('queryCount', totalRecordCount);
            }
        }
    },

    resetController (controller, isExiting) {
        if (isExiting) {
            // isExiting would be false if only the route's model was changing
            controller.set('pageNumber', 1);
        }
    },


    actions: {
        search: function () {
            let self = this,
                controller = self.controller,
                query = {
                    queryText: controller.get('queryText'),
                    distance: controller.get('distance'),
                    period: controller.get('period'),
                    type: controller.get('type'),
                    ageGroup: controller.get('ageGroup'),
                    isFree: controller.get('isFree'),
                    pageNumber: controller.get('pageNumber'),
                    pageSize: controller.get('pageSize')
                };

            self.store.query('event', query).then(function(records) {
                // it's possible that the page number is not 1, and the queryText search return only one page of result,
                // so we automatically set the pageNumber to 1 and reload the page again
                if (records.get('length') === 0 && query['pageNumber'] !== 1) {
                    self.transitionTo({queryParams: {pageNumber: 1}});
                }

                self.controller.set('model', records);
            }, function(error) {
                self.send('error', error);
            });
        }
    }
});
