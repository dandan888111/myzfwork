"use strict";
var myobj = {};
function attr4(key, val) {
    if (arguments.length > 1) {
        myobj[key] = val;
    }
    else {
        return myobj[key];
    }
}
attr4('name', 'wudandan');
console.log(attr4('name'));
