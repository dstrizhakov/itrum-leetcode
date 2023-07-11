"use strict";
// Задача 
// Написать типизацию функции для установки ключа значения в объекте
function updateValueByKey(obj, key, value) {
    return Object.assign(Object.assign({}, obj), { [key]: value });
}
updateValueByKey({ _id: 1, name: 'Jack' }, '_id', 124124); //invalid
updateValueByKey({ _id: 2, name: 'Alex' }, '_id', 1234); //valid
updateValueByKey({ _id: 3, name: 'Jack' }, 'name', 'Vasily'); //valid
updateValueByKey({ _id: 4, name: 'Jack' }, 'name', 'Sergey'); //invalid
