"use strict";
//Example of usage:
function pickProperties(obj, keys) {
    const result = {};
    keys.forEach(key => result[key] = obj[key]);
    return result;
}
const _user = { _id: 1, name: 'John', age: 30 };
const pickedUser = pickProperties(_user, ['name', 'age']); // valid
const pickedUser2 = pickProperties(_user, ['name', 'age']); // invalid
