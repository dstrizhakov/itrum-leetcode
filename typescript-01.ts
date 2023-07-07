// Задача 
// Написать типизацию функции для установки ключа значения в объекте

interface User {
   _id: number;
   name: string;
}

function updateValueByKey<K, T extends keyof K>(obj: K, key: T, value: K[T]): K {
   return {...obj, [key]:value};
}

updateValueByKey({_id: 1, name: 'Jack'}, '_id', 124124) //invalid
updateValueByKey({_id: 2, name: 'Alex'}, '_id', 1234) //valid
updateValueByKey({_id: 3, name: 'Jack'}, 'name', 'Vasily') //valid
updateValueByKey({_id: 4, name: 'Jack'}, 'name', 'Sergey') //invalid
