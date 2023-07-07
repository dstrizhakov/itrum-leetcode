
// !Задача: Реализуйте функцию delay(ms), которая возвращает промис, разрешающийся через указанное количество миллисекунд.

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> resolve(console.log('resolved')), ms);
})}
 delay(3000).then(() => console.log('Runs after 3 seconds'));
 


 // !Задача: Симуляция асинхронного запроса

 function fetchData(url, callback) {
  return new Promise((resolve) => {
    setTimeout(()=> resolve(), 2000)
 }).then(()=> {
  callback(url)
});}
 
fetchData('123', callback).then(() => console.log('Fetched'));

function callback(url) {
  console.log(url)
}


// !Задача: Реализуйте функцию asyncEvery(array, predicate)

function asyncEvery(array, predicate) {
  const result = []
  array.forEach((element, index) => {
    result.push(new Promise((resolve) => {resolve(predicate(element, index))})) 
  });
return Promise.all(result);
 }
 
 const array = [1, 2, 3, 4, 5];
 asyncEvery(array, async (num, index) => {
  await delay(50);
  return num < 4;
 }).then((res) => console.log(res)); // [true, true, true, false, false]

 function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



// ! Реализуйте функцию runInOrder(functions, delays)
// ?решение без промисов:

function runInOrder(functions, delays) {
functions.forEach((fn, index) => {
   const currentDelay = delays.reduce((acc, d, i)=>{
    if (index >= i) {
      return acc + d;
    }
    return acc
  },0)
   setTimeout(()=> fn(), currentDelay);
});
}
 
 const functions = [() => console.log("first"), () => console.log("second"), () => console.log("third")];
 const delays = [2000, 1000, 3000];
 
 runInOrder(functions, delays); // logs "first" after 2 seconds, "second" after another 1 second, and "third" after another 3 seconds


 // !Задача: Промис с таймаутом
 function promiseWithTimeout(promise, time) {
  let timer;
  return Promise.race([
    promise, 
    new Promise((res, rej) => timer = setTimeout(rej, time)).finally(() => clearTimeout(timer))]);
 }
 

 //!

 async function parallelPromisesWithLimit(urls, fetch) {
  const results = [];
  const concurrencyLimit = 5;
  const batchCount = Math.ceil(urls.length / concurrencyLimit);

  for (let i = 0; i < batchCount; i++) {
      const batchStart = i * concurrencyLimit;
      const batchArguments = urls.slice(batchStart, batchStart + concurrencyLimit);
      const batchPromises = [];
      for (let i = batchStart; i < batchStart + concurrencyLimit; i++) {
        batchPromises.push(fetch(batchArguments[i]))
       }
      const batchResults = Promise.all(batchPromises);
      results.concat(batchResults);
  }
  return result;
}
