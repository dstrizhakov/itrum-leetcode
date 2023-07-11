

// const flat = (arr) => {
//   return arr.reduce((acc, val) => Array.isArray(val) ? [...acc, ...flat(val)] : [...acc, val], []);
// }

// console.log(flat([[[1]],[2], [3], [4]]));

// function doSomthing(array, index) {
//   array[index].name = 'Fedya';
//   }
//   const people = [
//    { id: 1, name: 'Vasya',},
//    {id: 2,name: 'Petya'}
//   ];

//   const person = people[0]; 
//   person.name = 'Dasha';
  
//   doSomthing(people,0);
  
//   console.log(person);
//   console.log(people);

// function sum() {
//   return [...arguments].reduce((acc, arg) => acc + arg, 0);
// }

// console.log(sum(1, 2, 3)); // 6
// console.log(sum(4, 5, 6, 7)); // 22

const makeArray = (size) => [...Array(size)].map(() => size);

const small =  makeArray(1000000);
const medium = makeArray(10000000);
const large =  makeArray(100000000);

const solution1 = arr => {
  console.time('Array.includes');
  arr.includes(arr.length - 1)
  console.timeEnd('Array.includes');
}

const solution2 = arr => {
  const set = new Set(arr)
  console.time('Set.has');
  set.has(arr.length-1)
  console.timeEnd('Set.has');
}


console.log('** Testing small array:');
solution1(small);
solution2(small);
console.log('** Testing medium array:');
solution1(medium);
solution2(medium);
console.log('** Testing large array:');
solution1(large);
solution2(large);