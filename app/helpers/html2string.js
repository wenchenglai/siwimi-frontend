import Ember from 'ember';

export function html2string(htmlInput) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = htmlInput;

    return tmp.textContent || tmp.innerText || "";
}

export default Ember.Helper.helper(html2string);
