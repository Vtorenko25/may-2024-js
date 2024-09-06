let postDetailsDiv = document.getElementById('postDetailsDiv');
let userIdocalstorage = JSON.parse(localStorage.getItem('userID'));

function flatter(object, ul) {
    for (let key in object) {
        if (typeof object[key] === 'object' && object[key] !== null) {
            flatter(object[key], ul);
        } else {
            let li = document.createElement('li');
            li.innerText = `${key}: ${object[key]}`;
            ul.appendChild(li);
        }
    }
};

async function fetchPostUser(userid){
    let userPost = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
    for (let itar of userPost){
        if(itar.id === userIdocalstorage){
            let div = document.createElement('div');
            let ul = document.createElement('ul');
            flatter(itar, ul);
            let button = document.createElement('button');
            button.innerText = 'post of current user';
            div.classList.add('postOfCurrentUser');
            div.append(ul, button);
            postDetailsDiv.appendChild(div);
            let buttonClicked = false;
            button.onclick = function (){
                if (!buttonClicked) {
                    fetchTitleUser();
                    buttonClicked = true;
                }
            }
        }
    }
};

fetchPostUser();

async function fetchTitleUser(){
    let userTitle = await fetch(`https://jsonplaceholder.typicode.com/users/${userIdocalstorage}/posts`).then(value => value.json());
    console.log(userTitle);
    for (let itar of userTitle){
        let div = document.createElement('div');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let buttonTitle = document.createElement('button');
        buttonTitle.innerText = 'post details';
        li.innerText = ` title: ${itar.title}`;
        ul.appendChild(li);
        div.append(ul, buttonTitle);
        div.classList.add('postDetails');
        postDetailsDiv.appendChild(div);
        let userIdPost = itar.id;
        buttonTitle.onclick = function (){
            location.href='post-details.html';
            localStorage.setItem('userIDPost', JSON.stringify(userIdPost));
        }
    }
};

