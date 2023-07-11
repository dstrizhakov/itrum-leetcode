// Задача: Объясните, что будет выведено в консоль и почему.
// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");

// ? 1, 4, 3, 2


// Задача: Объясните, что будет выведено в консоль и почему.
// console.log('1');
// setTimeout(() => {
//  console.log('2');
//  Promise.resolve().then(() => console.log('3'));
// }, 0);
// Promise.resolve().then(() => console.log('4'));
// console.log('5');

// ? 1, 5, 4, 2, 3


// Задача: Объясните, что будет выведено в консоль и почему.

// console.log('1'); // синхронный код

// setTimeout(() => { // макротаска
//  	console.log('2');
//  	Promise.resolve().then(() => console.log('3')).then(() => console.log('4'));
// }, 0);

// setTimeout(() => { // макротаска
//  	console.log('5');
// }, 0);

// Promise.resolve().then(() => console.log('6')).then(() => console.log('7')); // синхронный код => микротаски(1 очередь) => микротаски(2 очередь)

// new Promise((resolve, reject) => { // синхронный код
// 	setTimeout(() => { // макротаска
// 		console.log('8')
// 	})
//   Promise.resolve().then(() => console.log('10'))// синхронный код => микротаски(1 очередь)
//   console.log('9'); // синхронный код
// })

// console.log('8');

// ? 1, 9, 8, 6, 10, 7, 2, 3, 4, 5, 8
// вызаваются все логи из синхронного кода 1 9 8
// выполняются накопленные микротаски 6 10 и тутже 7 как следующий микротаск
// запускаются коллбэк первого макротаска 2 и сразу попавшие в микротаси 3 и 4
// выполняется макротаск 5 и 8

// Задача: Объясните, что будет выведено в консоль и почему.

// console.log('1');
// setTimeout(() => {
//  console.log('2');
//  Promise.resolve().then(() => {
//    console.log('3');
//    setTimeout(() => console.log('4'), 0);
//  });
// }, 0);
// setTimeout(() => console.log('5'), 0);
// Promise.resolve().then(() => console.log('6'));
// console.log('7');

 // ? 1 7 6 2 3 5 4

// Задача: Объясните, что будет выведено в консоль и почему.

// console.log('1');
// setTimeout(() => console.log('2'), 1000);
// Promise.resolve().then(() => console.log('3')).then(() => console.log('4'));
// console.log('5');
// setTimeout(() => console.log('6'), 0);
// Promise.resolve().then(() => console.log('7'));
// console.log('8');

// ? 1 5 8 3 7 4 6 2



// setTimeout(() => {
//   for (let i = 0; i < 100000000; i++) {
//   //anything
//   }
  
//   console.log("1 timer");
//   }, 1000);
  
//   setTimeout(() => {
//   console.log("2 timer");
//   }, 1000);
  
//   setTimeout(() => {
//   console.log("3 timer");
//   }, 1000);
//?1,2,3

const object = {
  age: 9,
  getValue() {return this.age;}, // 9
  getAge: () => {return this.age;}, // undefined, стрелочная функция не имеет своего this
  };
  
  console.log(object.getValue()); //this = oblect 
  console.log(object.getAge());// this = globalThis,  а в нем не определена переменная age