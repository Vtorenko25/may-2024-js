
let time = localStorage.sessionsList;
let split = time.split('T');
let sliceYear = split[0].slice(2);
let sliceTime=split[1].slice(0, 8);
let h2 = document.createElement('h2');
h2.innerText = `Сторінку index.html відвідали в ${sliceTime}  ${sliceYear}`;
document.body.appendChild(h2);

