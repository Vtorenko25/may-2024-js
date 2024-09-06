let indexDiv = document.getElementById('indexDiv');
async function fetchUser(userid){
    let user = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
        for(let itar of user){
            let div = document.createElement('div');
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            let button = document.createElement('button');
            li.innerText = ` user id: ${itar.id},
                user name: ${itar.name}`;
            button.innerText= "user details";
            ul.appendChild(li);
            div.append(ul, button);
            indexDiv.appendChild(div);
            button.onclick = function (){
                location.href='user-details.html';
                let userId = itar.id;
                localStorage.setItem('userID', JSON.stringify(userId));
            }
        }
};
fetchUser();