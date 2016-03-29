import Ember from 'ember';

export default Ember.Component.extend({
    showParsers: false,

    actions: {
        transitionToEdit(id) {
            this.get('transitionToEdit')(id);
        },

        delete(id) {
            this.get('delete')(id);
        },

        changeEventLife(event, newLifeStage) {
            this.get('changeEventLife')(event, newLifeStage);
        }
    }
});
