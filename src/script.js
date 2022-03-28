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