//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const calculator = (a, b) => a * b;
console.log(calculator(50, 20));

//створити функцію яка обчислює та повертає площу кола з радіусом r

const squarre = (r) => 3.14*r*r;
console.log(squarre(20));

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const squarrre = (h, r) => 2*3.14*h*r;
console.log(squarrre(10, 15));

//створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const arr = (users) => {
    for (let user of users){
        console.log(user);
    }
}
arr(users);

//створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

const text = (text) =>{
    document.write(`<p>${text}</p>`);
}
text('створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент');

//створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

const textUl = (li) => {
    document.write(`<ul>
                        <li>${li}</li>
                        <li>${li}</li>
                        <li>${li}</li>
                    </ul>`);
}
textUl('lorem');

//створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

const textUlLi = (text, numberLi) =>{
    if(numberLi>0){
        document.write(`<ul>`);
        for(let i = 0; i <= numberLi; i++){
            document.write(`<li>${text}</li>`);
        }
        document.write(`</ul>`);
    }else{
        document.write('Введіть кількість рядків');
    }
}
textUlLi('створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write', 5);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

arr2 = [true, false, 12, 45, 'vasia', 49, 1065, 96, 'ilya'];

const arr1 = (arr) =>{
    document.write(`<ul>`)
    for(let i = 0; i <= arr.length; i++){
    }
    document.write(`<li> ${arr}</li>`);
    document.write(`</ul>`);
}
arr1(arr2);

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const object1 = (object) =>{
    for(let itar of object){
        for(let i = 0; i <= object.length; i++){

        }
        document.write(`<div>
                            <ul>
                          <li>id - ${itar.id}</li>
                          <li>name - ${itar.name}</li>
                          <li>age - ${itar.age}</li>
                          </ul>
                        </div>`);
    }
}
let object2 = [
    {
        id: 1,
        name: 'vasia',
        age: 31
    },
    {
        id: 2,
        name: 'olia',
        age: 35
    },
    {
        id: 3,
        name: 'kokos',
        age: 28
    }
]
object1(object2);

//створити функцію яка повертає найменьше число з масиву

let arr3 = [145, 46, 6, 89, 10, 52, 76];
const numberMin = (arr) =>{
    let min = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
console.log(numberMin(arr3));

//створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const  arrSum = (arr) =>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let arr4 = [10, 20, 30, 40, 1, 15, 60, 12];
console.log(arrSum(arr4));

//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, i1, i2) =>{
    let num = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = num;
    return arr;
}
console.log(swap(arr4, 1, 7));

//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let shosenCurrency;
    for (let item of currencyValues){
        if (item.currency === exchangeCurrency){
            shosenCurrency = item;
        }
    }
    let result = sumUAH/shosenCurrency.value;
    return result;
}

console.log(exchange(800000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));