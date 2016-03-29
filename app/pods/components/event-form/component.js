import Ember from 'ember';
import EventFiltersMixin from '../../../mixins/event-filters';

export default Ember.Component.extend(EventFiltersMixin, {
    allStates: [
        { value: "AL", text: "Alabama"},
        { value: "AK", text: "Alaska"},
        { value: "AS", text: "American Samoa"},
        { value: "AZ", text: "Arizona"},
        { value: "AR", text: "Arkansas"},
        { value: "CA", text: "California"},
        { value: "CO", text: "Colorado"},
        { value: "CT", text: "Connecticut"},
        { value: "DE", text: "Delaware"},
        { value: "DC", text: "District Of Columbia"},
        { value: "FM", text: "Federated States Of Micronesia"},
        { value: "FL", text: "Florida"},
        { value: "GA", text: "Georgia"},
        { value: "GU", text: "Guam"},
        { value: "HI", text: "Hawaii"},
        { value: "ID", text: "Idaho"},
        { value: "IL", text: "Illinois"},
        { value: "IN", text: "Indiana"},
        { value: "IA", text: "Iowa"},
        { value: "KS", text: "Kansas"},
        { value: "KY", text: "Kentucky"},
        { value: "LA", text: "Louisiana"},
        { value: "ME", text: "Maine"},
        { value: "MH", text: "Marshall Islands"},
        { value: "MD", text: "Maryland"},
        { value: "MA", text: "Massachusetts"},
        { value: "MI", text: "Michigan"},
        { value: "MN", text: "Minnesota"},
        { value: "MS", text: "Mississippi"},
        { value: "MO", text: "Missouri"},
        { value: "MT", text: "Montana"},
        { value: "NE", text: "Nebraska"},
        { value: "NV", text: "Nevada"},
        { value: "NH", text: "New Hampshire"},
        { value: "NJ", text: "New Jersey"},
        { value: "NM", text: "New Mexico"},
        { value: "NY", text: "New York"},
        { value: "NC", text: "North Carolina"},
        { value: "ND", text: "North Dakota"},
        { value: "MP", text: "Northern Mariana Islands"},
        { value: "OH", text: "Ohio"},
        { value: "OK", text: "Oklahoma"},
        { value: "OR", text: "Oregon"},
        { value: "PW", text: "Palau"},
        { value: "PA", text: "Pennsylvania"},
        { value: "PR", text: "Puerto Rico"},
        { value: "RI", text: "Rhode Island"},
        { value: "SC", text: "South Carolina"},
        { value: "SD", text: "South Dakota"},
        { value: "TN", text: "Tennessee"},
        { value: "TX", text: "Texas"},
        { value: "UT", text: "Utah"},
        { value: "VT", text: "Vermont"},
        { value: "VI", text: "Virgin Islands"},
        { value: "VA", text: "Virginia"},
        { value: "WA", text: "Washington"},
        { value: "WV", text: "West Virginia"},
        { value: "WI", text: "Wisconsin"},
        { value: "WY", text: "Wyoming"}
    ],

    allTimes: [
        '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM',
        '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM',
        '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
        '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
        '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM'
    ],

    allLifeStages: [
        { value: "all", text: 'All'},
        { value: "Submitted", text: 'Submitted'},
        { value: "Approved", text: 'Approved'},
        { value: "Rejected", text: 'Rejected'}
    ],

    allAges: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

    store: Ember.inject.service(),

    goBack() {
        history.back();
    },

    actions: {
        save() {
            this.get('attrs.model.value').save();
            this.goBack();
        },

        cancel() {
            this.goBack();
        }
    }
});
