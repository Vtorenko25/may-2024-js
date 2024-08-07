let arr = [12, 6, 9, 8, 11, true, 'vasya', 54, 45, 9];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

let book1 = {
    title: 'green mile',
    pageCount: 322,
    genre: 'fantastic'
}
let book2 = {
    title: 'Forest Gampt',
    pageCount: 420,
    genre: 'fantastic'
}
let book3 = {
    title: 'Grand',
    pageCount: 388,
    genre: 'fantastic'
}

let book4 = {
    title: 'green mile',
    pageCount: 322,
    genre: 'fantastic',
    authors: [
        {
            name: 'Piter Pen',
            age: 54
        }
    ]
}
let book5 = {
    title: 'Forest Gampt',
    pageCount: 420,
    genre: 'fantastic',
    authors: [
        {
            name: 'Jef Green',
            age: 72
        }
    ]
}
let book6 = {
    title: 'Grand',
    pageCount: 388,
    genre: 'fantastic',
    authors: [
        {
            name: 'Met Black',
            age: 48
        }
    ]
}

let users = [
    {
        name: 'Olya',
        userName: 'Olya12',
        pasword: 13256323
    },
    {
        name: 'Vasya',
        userName: 'Vasya22',
        pasword: 13453434
    },
    {
        name: 'Anton',
        userName: 'Anton772',
        pasword: 55755357
    },
    {
        name: 'Oleh',
        userName: 'Oleh40',
        pasword: 42752724
    },
    {
        name: 'Katya',
        userName: 'Katya455',
        pasword: 55955556545
    },
    {
        name: 'Illia',
        userName: 'Illia45',
        pasword: 532742425
    },
    {
        name: 'Mila',
        userName: 'Mila2333',
        pasword: 5654757567
    },
    {
        name: 'Jon',
        userName: 'Jon1242',
        pasword: 76874342
    },
    {
        name: 'Met',
        userName: 'Metq2q23q',
        pasword: 4545435353
    },
    {
        name: 'Kent',
        userName: 'Kent3w4w4',
        pasword: 6565631356
    }
]
console.log(users[0].pasword);
console.log(users[1].pasword);
console.log(users[2].pasword);
console.log(users[3].pasword);
console.log(users[4].pasword);
console.log(users[5].pasword);
console.log(users[6].pasword);
console.log(users[7].pasword);
console.log(users[8].pasword);
console.log(users[9].pasword);

let temperatures = {
    Monday: {
        morning: 10,
        day: 25,
        evening: 12
    },
    Tuesday: {
        morning: 9,
        day: 28,
        evening: 14
    },
    Wednesday: {
        morning: 7,
        day: 16,
        evening: 9
    },
    Thursday: {
        morning: 12,
        day: 22,
        evening: 6
    },
    Friday: {
        morning: 18,
        day: 35,
        evening: 16
    },
    Saturday: {
        morning: 19,
        day: 42,
        evening: 22
    },
    Sunday: {
        morning: 14,
        day: 27,
        evening: 12
    }
}

let x = 1;
if (x != 0) {
    console.log('Вірно!');
} else {
    console.log('Не вірно');
}

let time = 60;
if (time >= 0 && time <= 15) {
    console.log('Перша четверть');
} else if (time >= 16 && time <= 30) {
    console.log('Друга четверть');
} else if (time >= 31 && time <= 45) {
    console.log('Третя четверть');
} else if (time >= 46 && time <= 60) {
    console.log('Четверта четверть');
};

let day = 31;

if (day >= 1 && day <= 10) {
    console.log('Перша декада');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада');
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада');
}

switch (6) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}

let a = 10;
let b = 20;
if (a > b) {
    console.log(a);
} else if (a < b) {
    console.log(b);
} else if (a = b) {
    console.log('Числа рівні');
}

let X = !!'';
if (!(X == !!0 || X == !!'' || X == !!undefined || X == !!null || X == !!NaN)) {
    X = true;
} else {
    X = 'default';
}
console.log(X);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration>5){
    console.log('Супер');
}
if(coursesAndDurationArray[1].monthDuration>5){
    console.log('Супер');
}
if(coursesAndDurationArray[2].monthDuration>5){
    console.log('Супер');
}
if(coursesAndDurationArray[3].monthDuration>5){
    console.log('Супер');
}
if(coursesAndDurationArray[4].monthDuration>5){
    console.log('Супер');
}
if(coursesAndDurationArray[5].monthDuration>5){
    console.log('Супер');
}
