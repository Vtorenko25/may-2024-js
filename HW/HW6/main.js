// Знайти та вивести довижину настипних стрінгових значень

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

// Перевести до великого регістру наступні стрінгові значення

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let  str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';

console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let s = str.trim();
console.log(s);

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
  let str7 = 'Ревуть воли як ясла повні';
  let arr = str7.split(' ');
console.log(arr);

//є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr2 = [10,8,-7,55,987,-1011,0,1050,0];
let arr3 = arr2.map(arr => arr + '');
console.log(arr3);

//створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11,21,3];

function sortNums(array, direction){
    if(direction === 'ascending') return array.sort((a, b) => a-b);
    if(direction === 'descending') return array.sort((a, b) => b-a);
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
let sortCoursesAndDurationArray = coursesAndDurationArray.sort((num1, num2) =>{
    return num1.monthDuration - num2.monthDuration;
});
console.log(sortCoursesAndDurationArray);
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterCoursesAndDurationArray = coursesAndDurationArray.filter(function (value){
    return value.monthDuration > 5;
});
console.log(filterCoursesAndDurationArray);
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapCoursesAndDurationArray = coursesAndDurationArray.map((value, index)=>{
    let obj = {
        id:index+1,
        title:value.title,
        monthDuration:value.monthDuration}
    return obj;
});
console.log(mapCoursesAndDurationArray);

// описати колоду карт (від 6 до туза без джокерів)
let suits = ['spade', 'diamond','heart', 'club'];
let values = ['6', '7', '8', '9', '10','jack','queen','king', 'ace'];

let cards = [];

for (let suit of suits){
    for (let value of values){
        let card = {cardSvit: suit, value:value};
        if(suit === 'heart' || suit === 'diamond'){
            card.color = 'red';
        }else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
//  - знайти піковий туз
console.log(cards.find(card => card.value === 'ace' && card.cardSvit === 'spade'));
//  - всі шістки
console.log(cards.filter(card => card.value === '6'));
//  - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
//  - всі буби
console.log(cards.filter(card => card.cardSvit === 'diamond'));
//  - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSvit === 'club' && !(card.value==='6' || card.value==='7' ||
    card.value==='8')));

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let reduse = cards.reduce((accum, card)=>{
    switch (card.cardSvit){
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
    }
return accum;
},
    {
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
    });

console.log(reduse);

// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter((course => {
    return course.modules.includes('sass');
})));
console.log(coursesArray.filter((course => {
    return course.modules.includes('docker');
})));


