// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були
// до цього моменту.

function cloner(obj){
    if(obj){
        let functions = [];
        for(let key in obj){
            if(typeof obj[key] === 'function'){
                let functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        let cloneObj = JSON.parse(JSON.stringify(obj));
        for(let func of functions){
            cloneObj[func.key] = func.functionClone;
        }
        return cloneObj;
    }
    throw new Error('!!!!!!');
}

// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.map((course, index) => ({id: index + 1,...course})));
