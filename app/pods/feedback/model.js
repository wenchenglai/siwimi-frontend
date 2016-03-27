import DS from 'ember-data';

export default DS.Model.extend({
    createdDate: DS.attr('date'),
    description: DS.attr('string'),
    senderEmail: DS.attr('string'),
    isDeletedRecord: DS.attr('boolean')
});
