// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
let h2 = document.createElement('h2');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
h2.innerText='hello';
div.appendChild(h2);

let divClone = div.cloneNode(true);
document.body.append(div, divClone);

// - Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main','Products','About us','Contacts'];

for (let itar of arr){
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerText = `${itar}`;
    ul.append(li);
    document.body.append(ul);
}

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let itar of coursesAndDurationArray){
    let div = document.createElement('div');
    let h2 = document.createElement('h2');

    h2.innerText = `Title: ${itar.title}, MonthDuration: ${itar.monthDuration}`;
    div.appendChild(h2);
    document.body.append(div);
}

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (let itar of coursesAndDurationArray){
    let div = document.createElement('div');
    div.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `${itar.title}:`;

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `${itar.monthDuration} month`;

    div.append(h1, p);
    document.body.appendChild(div);
}