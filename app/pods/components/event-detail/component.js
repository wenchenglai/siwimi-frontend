import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        goBack: function() {
            history.back();
        }
    }
});
