// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

let carts_block = document.getElementById('carts_block');

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(cartObject =>{
        let {carts} = cartObject;
        for(let cart of carts){
            let div = document.createElement('div');
            div.classList.add('cart-container');
            let divInfo = document.createElement('div');
            divInfo.innerText = `
            total: ${cart.total},
            discountedTotal: ${cart.discountedTotal},
            totalProducts: ${cart.totalProducts},
            totalQuantity: ${cart.totalQuantity},
            userId: ${cart.userId}
            `
            let ol = document.createElement('ol');
            for(let product of cart.products){
                let li = document.createElement('li');
                let img = document.createElement('img');
                li.innerText = `
                discountPercentage: ${product.discountPercentage},
                discountedTotal: ${product.discountedTotal},
                id: ${product.id},
                price: ${product.price},
                quantity: ${product.quantity},
                title: ${product.title},
                total: ${product.total}
                `
                img.src=product.thumbnail;
                li.appendChild(img);
                ol.appendChild(li);
            }
            div.append(divInfo, ol);
            carts_block.appendChild(div);
        }
    });

// взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

let carts_recipes = document.getElementById('carts_recipes');

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(cartObject =>{
        // console.log(cartObject);
        let {recipes} = cartObject;
        for(let recipe of recipes){
            let divRecipe = document.createElement('div');
            let ulIngredients = document.createElement('ul');
            ulIngredients.innerText = `${recipe.name}:`;
            let img = document.createElement('img');
            img.src=`${recipe.image}`

            for(let ing of recipe.ingredients){
                // console.log(ing);
                let li = document.createElement('li');
                li.innerText = `${ing}`
                ulIngredients.appendChild(li);
            }
            let ulinstructions = document.createElement('ul');
            ulinstructions.innerText = 'Instructions:'
            for(let ing of recipe.instructions){
                // console.log(ing);
                let li = document.createElement('li');
                li.innerText = `${ing}`
                ulinstructions.appendChild(li);
            }


            divRecipe.append(ulIngredients, ulinstructions, img);
            carts_recipes.appendChild(divRecipe);
        }
    });

