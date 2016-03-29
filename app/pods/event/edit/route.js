import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return this.store.find('event', params.id);
    },

    actions: {
        goBack: function() {
            history.back();
        },

        save: function() {
            let self = this,
                model = self.currentModel;

            model.save().then(function() {
                history.back();
            });
        },

        cancel: function() {
            var model = this.currentModel;

            if (model.get('hasDirtyAttributes')) {
                model.rollback();
            }

            history.back();
        }
    }
});
