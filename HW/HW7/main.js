// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function Users(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
};

let User = [];
for(let i = 1; i <= 10; i++){
    User.push(new Users(id=`${i}`, name=`kokos${i}`, surname = `kokosovich${i}`, email = `kokos${i}@gmail.com`,
        phone=`063${i}${i}${i}${i}${i}${i}${i}`));
}
console.log(User);

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let User2 = User.filter(value => value.id % 2 === 0);
console.log(User2);

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let User3 = User.sort((user1, user2)=>{
    return user1.id - user2.id;
});
console.log(User3);

//  створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email =email;
        this.phone = phone;
        this.order = order;
    }
};

function product(title, price){
    this.title = title;
    this.price = price;
};

let Clients = [];

for(let i = 1; i <= 10; i++){
    Clients.push(new Client(id=`${i}`, name=`kokos${i}`, surname = `kokosovich${i}`, email = `kokos${i}@gmail.com`,
        phone=`063${i}${i}${i}${i}${i}${i}${i}`, order= [new product(`tv${i}`, `${Math.floor(Math.random() * 50000)}`)] ));
};

console.log(Clients);

//Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clients = Clients.sort((user1, user2)=>{
    return user1.order.length - user2.order.length;
});
console.log(clients);

//  Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, engineVolume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive= function (){
        console.log(`Їдемо зі швидкістю ${this.maxSpeed } км/год`);
    };
    this.info = function (){
        for(let key in this){
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function(newSpeed){
        if(newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newYear){
       if(newYear > this.year) this.year = newYear;
    };
    this.addDriver = function (driverObject){
     if(driverObject) this.driver = driverObject;
    }
};

let car = new Car('Honda', 'Honda R&D Co', 2010, 250, 2,5)
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2020);
car.addDriver({});
console.log(car);


//(Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars{
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive (){
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info  (){
        for(let key in this){
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed (newSpeed){
        if(newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    };
    changeYear  (newYear){
        if(newYear > this.year) this.year = newYear;
    };
    addDriver  (driverObject){
        if(driverObject) this.driver = driverObject;
    }
}
let cars = new Cars('Tesla', 'Tesla Motors', 2020, 300, 2);
console.log(cars);
cars.drive();
cars.info();
cars.increaseMaxSpeed(400);
cars.changeYear(2022);
cars.addDriver({});
console.log(cars);


// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let Cinderellas = [];
for( let i = 1; i <= 10; i++){
    Cinderellas.push(new Cinderella(name = `Alla-${i}`, age = 18+ +`${i}`, footSize = 35 + +`${i}`));
}
console.log(Cinderellas);

class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince =new Prince('kokos', 35, 38 );
console.log(prince);

for(itar of Cinderellas){
    if(itar.footSize === prince.shoe){
        console.log(`Дружину принца будуть звати ${itar.name}`);
    }
}

let cinderellas = Cinderellas;

let CinderellaMain = Cinderellas.find(cinderella => cinderella.footSize === prince.shoe);
console.log(CinderellaMain);

//*Через Array.prototype. створити власний foreach, filter

let arr10 = [5, 12, 9, 6, 42, 18, 42, true, false, 48, 'kokos'];

Array.prototype.foreach = function (){
    console.log(this);
};
arr10.foreach(arr10);

Array.prototype.filterr = function (arr){
    for(let itar of arr){
        if(itar > 5){
            console.log(itar+=2)
        }
    }
}
arr10.filterr(arr10);










