import Ember from 'ember';

export function substring(input, size) {
    if (input) {
        var default_size = 40;

        if (size && !isNaN(size)) {
            default_size = size;
        }
        if (input.length > default_size) {
            return input.substring(0, default_size) + "...";
        } else {
            return input;
        }
    } else {
        return "";
    }
}

export default Ember.Helper.helper(substring);
