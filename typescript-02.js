"use strict";
//Define a type NestedArray<T> that represents an array that can contain elements of type T or other NestedArray<T>s 
//(i.e., the array can be arbitrarily nested). Write a function flattenArray that takes a NestedArray<T> and returns a flat array of T.
// Example usage:
const nestedArray = [1, [2, [3, 4, [5]]], 6];
const flattenArray = (arr) => {
    const result = [];
    const flatten = (item) => {
        if (Array.isArray(item)) {
            for (let element of item) {
                flatten(element);
            }
        }
        else {
            result.push(item);
        }
    };
    return result;
};
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
