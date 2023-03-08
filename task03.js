/*let number = 123;
let quantity = 0;

Техническое задание
Напиши программу, которая определяет сколько цифр в одном числе.
Само число записано в переменную number.
Найди количество цифр в этом числе и запиши результат в переменную quantity.
*/

let number;
let quantity;

const calc = (number) => {
  number = String(number);
  return (quantity = number.length);
};

console.log(calc(123));
