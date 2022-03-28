const app = document.getElementById('app')
const row = document.createElement("div");
row.setAttribute('class', 'row g-3');

const num = 100;
for (let i = 1; i <= num; i++) {
    const col = document.createElement('div');
    col.setAttribute('class', 'col-6 col-sm-6 col-md-3 col-lg-2');
    const box = document.createElement('div');
    box.setAttribute('class', 'square');

    if ((i % 3 === 0) && (i % 5 === 0)) {
        box.innerHTML = 'FizzBuzz';
    } else if (i % 3 === 0) {
        box.innerHTML += 'Fizz';
    } else if (i % 5 === 0) {
        box.innerHTML += 'Buzz';
    } else {
        box.innerHTML += i;
    }
    col.append(box);
    row.append(col)
}
app.append(row) 