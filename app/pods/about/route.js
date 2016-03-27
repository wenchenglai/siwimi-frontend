import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        sendFeedback(email, feedback) {
            debugger;
            var model = this.store.createRecord('feedback', {
                senderEmail: email,
                description: feedback,
                createdDate: new Date()
            });

            model.save().then(() => this.controller.set('isSubmitted', true)).catch((error) => { alert('error');});
        }
    }
});
