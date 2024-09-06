let postDetailsDiv = document.getElementById('postDetailsDiv');
let userIdocalstorage = JSON.parse(localStorage.getItem('userID'));
let userIdPostsocalstorage = JSON.parse(localStorage.getItem('userIDPost'));

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

async function fetchPostsUser(){
    let userPosts = await fetch(`https://jsonplaceholder.typicode.com/users/${userIdocalstorage}/posts`).then(value => value.json());
    for (let itar of userPosts ){
        if(itar.id === userIdPostsocalstorage){
            let div = document.createElement('div');
            let ul = document.createElement('ul');
            let h2 = document.createElement('h2');
            div.classList.add('userPost');
            h2.innerText = `Пост user № ${itar.userId} :`;
            flatter(itar, ul);
            div.append(h2, ul);
            postDetailsDiv.appendChild(div);
        }
    }
};
fetchPostsUser();

async function fetchComentsUser(){
    let comentsPosts = await fetch(`https://jsonplaceholder.typicode.com/posts/${userIdPostsocalstorage}/comments`).then(value => value.json());
    for (let itar of comentsPosts){
        if(itar.postId === userIdPostsocalstorage) {
            let div = document.createElement('div');
            let ul = document.createElement('ul');
            let h2 = document.createElement('h2');
            div.classList.add('userComents');
            h2.innerText = `Коментар № ${itar.id} до посту № ${itar.postId }: `
            flatter(itar, ul);
            div.append(h2,ul);
            postDetailsDiv.appendChild(div);
        }
    }
};
fetchComentsUser();