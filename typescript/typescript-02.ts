
//Define a type NestedArray<T> that represents an array that can contain elements of type T or other NestedArray<T>s 
//(i.e., the array can be arbitrarily nested). Write a function flattenArray that takes a NestedArray<T> and returns a flat array of T.

type NestedArray<T> = T | NestedArray<T> []
// Example usage:
const nestedArray: NestedArray<number> = [1, [2, [3, 4, [5]]], 6];

const flattenArray = <T>(arr: NestedArray<T>): T[] => {
  const result: T[] = [];
  const flatten = (item: NestedArray<T>) => {
    if (Array.isArray(item)) {
        for (let element of item) {
            flatten(element);
        }
    } else {
        result.push(item);
    }
};
return result;
}

console.log(flattenArray(nestedArray));  // Output: [1, 2, 3, 4, 5, 6]



