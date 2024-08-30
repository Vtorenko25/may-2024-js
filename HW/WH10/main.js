//- Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let button = document.getElementById('button');
button.onclick=function (){
    document.getElementById('text').style.display='none';
};

//створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input = document.getElementsByClassName('input')[0];
let button_1 = document.getElementById('buttons');

button_1.addEventListener('click', function (e){
    e.preventDefault();
    let userage = input.value;
    console.log(userage);
    let target = document.getElementsByClassName('target')[0];
    if(userage < 18){
        console.log('Ви неповнолітні');
        let h1 = document.createElement('h1');
        h1.innerText = 'Ви неповнолітні';
        target.appendChild(h1);
    }
});

//Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form1 = document.forms.form1;
form1.addEventListener('submit', function (e){
    e.preventDefault();
    let name = this.name.value;
    let surname = this.surname.value;
    let age = this.age.value;
    let userForms = document.createElement('p');
    userForms.innerText = `Ваше ім'я: ${name}; Ваше прізвище: ${surname}; Ваш вік: ${age}`;
    document.forms.form1.appendChild(userForms);
});

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
counter += 1;
document.getElementById('counter').innerText = counter;
localStorage.setItem('counter', counter);

//Є сторінка index.html (назва довільна),
// при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про
// відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let data = new Date();
let sessionsList = [];
sessionsList.push(data);
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

//створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
//При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let form2 = document.forms.form2;

form2.weight.oninput=function (){
    let userWeight = this.value*2.20462;
    console.log(userWeight);
    let result = document.createElement('h2');
    result.innerText = userWeight;
    document.forms.form2.appendChild(result);
};

// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції - addToLocalStorage(arrayName:string,objToAdd:any{}):void
function addToLocalStorage(arrayName, objToAdd) {
    let lsItem = localStorage.getItem(arrayName);
    let array = lsItem ? JSON.parse(lsItem) : [];
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
let nevArrJson = 'myArrayKey';
addToLocalStorage(nevArrJson, { name: 'kokos' });

//Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let table = document.getElementById('table');
table.border = '1';
let generateTable = document.forms.generateTable;
generateTable.addEventListener('submit', function (e){
    e.preventDefault();
    let colums = +this.colums.value;
    let rows = +this.rows.value;
    let data = this.data.value;
    for(let i = 0; i < colums; i++){
        let tr = document.createElement('tr');

        for(let j = 0; j < rows; j++){
            let td = document.createElement('td');
            td.innerText = data;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
});

// (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

// let price = localStorage.getItem('price') ? parseInt(localStorage.getItem('price')) : 100;
// let lastPriceTime = localStorage.getItem('lastPriceTime');
// let nevPriceTime = Math.floor(Date.now() / 1000);
//
// if(nevPriceTime-lastPriceTime > 10){
//     price += 10;
//     localStorage.setItem('lastPriceTime', nevPriceTime);
//     document.getElementById('price').textContent = nevPriceTime + 'грн';
// }
// localStorage.setItem('price', price);


function updatePrice() {
    let currentPrice = localStorage.getItem('price') ? parseInt(localStorage.getItem('price')) : 100;
    let lastUpdateTime = localStorage.getItem('lastUpdateTime');
    let newUpdateTime = Math.floor(Date.now() / 1000);
    if (!lastUpdateTime || newUpdateTime - lastUpdateTime > 10) {
        currentPrice += 10;
        localStorage.setItem('lastUpdateTime', newUpdateTime);
    }

    localStorage.setItem('price', currentPrice);

    document.getElementById('priceBlock').textContent = currentPrice + 'грн';
}

updatePrice();

// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let ArrObject = document.getElementById('ArrObject');

let arrObject = [];
for (let i =1; i<=100; i++){
    arrObject.push({name:`user ${i}`, id:`${i}`});
}
for(let itar of arrObject){
    if(itar.id <= 10){
        let user = document.createElement('p');
        user.innerText = itar.name;
        ArrObject.appendChild(user);
    }
}

let start = 0;
let end = 10;
let step = 10;

next.onclick = function (){
    ArrObject.innerHTML = ''
    start += step;
    end += step;
    for(let itar of arrObject){
        if(itar.id > start && itar.id <= end){
            let user = document.createElement('p');
            user.innerText = itar.name;
            ArrObject.appendChild(user);
        }
    }
}
prev.onclick = function (){
    ArrObject.innerHTML = ''
    if(start <=0 && end <=0){
        start;
        end;
    }else{
        start -= step;
        end -= step;
        for(let itar of arrObject){
            if(itar.id > start && itar.id <= end){
                let user = document.createElement('p');
                user.innerText = itar.name;
                ArrObject.appendChild(user);
            }
        }
    }
}



