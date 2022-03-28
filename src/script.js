const app = document.getElementById('app')
const row = document.createElement("div");
row.setAttribute('class', 'row g-3 p-5');

const num = 100;
for (let i = 1; i <= num; i++) {
    const col = document.createElement('div');
    col.setAttribute('class', 'col');
    const box = document.createElement('div');
    box.setAttribute('class', 'square');

    if ((i % 3 === 0) && (i % 5 === 0)) {
        box.innerHTML = 'FizzBuzz';
        box.classList.add("square-color-red");
    } else if (i % 3 === 0) {
        box.innerHTML += 'Fizz';
        box.classList.add("square-color-green");
    } else if (i % 5 === 0) {
        box.innerHTML += 'Buzz';
        box.classList.add("square-color-yellow");
    } else {
        box.innerHTML += i;
        box.classList.add("square-color-blue");
    }
    col.append(box);
    row.append(col)
}
app.append(row) 

// [![](https://mermaid.ink/img/pako:eNp9kr9uwjAQh1_l5IEuIIGqLhlaFcKfVKo60I0wuMkBpzp26thITci7dOzcV-DF6iQQEGrZTsl33_3ku4JFKkbmsbXm6QZe_VCG8nEx0qjASg5brom_kUCQNgGSEFmCDNcS9f4HPhxiqPqFmiDGrYJISaOVEFzjEnq9exgWRSApJy4ozyspRBQJBSulIdpg2-CEX2Cscb6TkQtxAwPgAgb9fllW4Ya1dVQEoqEU7L8hpi1lVOdMUcMtdDqX3-4e6vZR3b7LaOcv5oYnqQKJLm6VI1OOnbiYQ5vnyzNaqt34-sBGPm7lk__lyzPSiadXxYfU01Y8-1vcJp624mBxEkslL-QZ8cNTVUuoR9X9ft3_dJxC7gKEcqtQxqC01bJRgP_yXMOTBq7K2akMmpJ1mZudcIrdeRWhBAiZ2WCCIfNcGXP9HrJQlo6zacwNjmMySjNvxUWGXcatUfNPGTHPaItHyCfuTjU5UOUvG7_2lw)](https://mermaid.live/edit#pako:eNp9kr9uwjAQh1_l5IEuIIGqLhlaFcKfVKo60I0wuMkBpzp26thITci7dOzcV-DF6iQQEGrZTsl33_3ku4JFKkbmsbXm6QZe_VCG8nEx0qjASg5brom_kUCQNgGSEFmCDNcS9f4HPhxiqPqFmiDGrYJISaOVEFzjEnq9exgWRSApJy4ozyspRBQJBSulIdpg2-CEX2Cscb6TkQtxAwPgAgb9fllW4Ya1dVQEoqEU7L8hpi1lVOdMUcMtdDqX3-4e6vZR3b7LaOcv5oYnqQKJLm6VI1OOnbiYQ5vnyzNaqt34-sBGPm7lk__lyzPSiadXxYfU01Y8-1vcJp624mBxEkslL-QZ8cNTVUuoR9X9ft3_dJxC7gKEcqtQxqC01bJRgP_yXMOTBq7K2akMmpJ1mZudcIrdeRWhBAiZ2WCCIfNcGXP9HrJQlo6zacwNjmMySjNvxUWGXcatUfNPGTHPaItHyCfuTjU5UOUvG7_2lw)