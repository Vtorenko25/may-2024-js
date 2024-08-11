//Створити пустий масив та :a. заповнити його 50 парними числами за допомоги циклу.
let arr = [];
for(let i = 1; i <= 50; i++){
    if(i % 2 == 0){
        arr.push(i);
    }
}console.log(arr);

//b. заповнити його 50 непарними числами за допомоги циклу.
let arr1 = [];
for(let i = 1; i <= 50; i++){
    if(i % 2 !== 0){
        arr1.push(i);
    }
}console.log(arr1);

// c. Заповнити масив 20ма рандомними числами.
let arr2 = [];
for (let i = 0; i< 20; i++){
    let a = Math.round( Math.random() * 1000 );
    arr2.push(a);
}
console.log(arr2);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732
let arr3 = [];
for (let i = 0; i< 20; i++){
    let a = Math.round(Math.random() * (8, 732));
    arr3.push(a);
}console.log(arr3);

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 1; i <=30; i++){
    if(i % 3 == 0){
        console.log(i)
    }
}

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 1; i <=30; i++){
    if(i % 3 == 0 && i % 2 ==0){
        console.log(i)
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arr4 = [];
for (let i = 1; i <=30; i++){
    if(i % 3 == 0 && i % 2 ==0){
        arr4.push(i)
    }
}
console.log(arr4);

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let arr5 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let i = 0; i <=arr5.length; i++){
    if(arr5[i+1] % 2 == 0){
        console.log(arr5[i]);
    }
}

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arr6 = [100, 250, 50, 168, 120, 345, 188];
 let sum = 0;
 let result = 0;
    for (let i = 0; i < arr6.length ; i++){
        sum = sum + arr6[i];
        result = sum/arr6.length;

}console.log(result);

//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr7 = [];
let arr8 = [];
for (let i = 1; i <= 10; i++){
    arr7.push(Math.round(Math.random() * 1000));
    }
    for (itar of arr7){
    arr8.push(itar*5);
}
console.log(arr7);
console.log(arr8);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arr9 = [15, 'vasia', true, false, 37, 95, 112, 'olya'];
let arr10 = [];
for (let i = 0; i < arr9.length; i++){
    if(typeof arr9[i] === 'number'){
        arr10.push(arr9[i]);
    }
}
console.log(arr10);


//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i= 0; i < arr11.length; i++){
    if(arr11[i] % 2 ==0){
        console.log(arr11[i]);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr13 = [];
for(let i = 0; i < arr12.length; i++){
    arr13.push(arr12[i]);
}
console.log(arr13);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arr14 = [ 'a', 'b', 'c'];
let b = '';
for(let i = 0; i < arr14.length; i++){
    b += arr14[i];
}console.log(b);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let arr15 = [ 'a', 'b', 'c'];
let j = 0;
let d = '';
while (j < arr15.length){
    d += arr[j];
    j++;
}console.log(d);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let arr16 = [ 'a', 'b', 'c'];
let cd = '';
for (let itar of arr16){
    cd += itar;
}
console.log(cd);






