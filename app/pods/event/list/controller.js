import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['period', 'type', 'distance', 'ageGroup', 'isFree', 'queryText', 'pageNumber', 'pageSize', 'isAdmin'],
    period: "all",
    type: "all",
    distance: "all",
    ageGroup: "all",
    isFree: false,
    queryText: '',
    queryTextBuffer: '', // to avoid refresh the page again when user just types a single character as queryText
    pageNumber: 1,
    pageSize: 10,
    queryCount: 0, // total query count from this specific query
    isAdmin: false,

    actions: {
        transitionToEdit: function(id) {
            this.transitionToRoute("event.edit", id);
        },

        delete (id) {
            this.store.findRecord('event', id).then(function (record) {
                record.destroyRecord();
            });
        },

        changeEventLife: function(event, newLifeStage) {
            if (!Ember.isEmpty(newLifeStage)) {
                event.set('stage', newLifeStage);
                event.save();
            }
        }
    }
});
