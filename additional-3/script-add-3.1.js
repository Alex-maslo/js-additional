// Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let array = [];

for (let i = 0; i < 10; i++) {
  array[array.length] = Math.floor(Math.random() * 100);
}

console.log(array);
