import Ember from 'ember';

export function userReadable(input, collection) {
    var ret = "",
        item;

    if (input) {
        item = window._.find(collection, function(obj) { return obj.value === input; });

        if (item) {
            ret = item.text;
        } else {
            ret = input;
        }
    }
    return ret;
}

export default Ember.Helper.helper(userReadable);
