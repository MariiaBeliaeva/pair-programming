let luggage = [
  "пакет",
  "мяч",
  "тапки",
  "когтеточка",
  "коробка",
  "миска",
  "мята",
];
let startIndex = 2;
let quantity = 3;
let chosenLuggage = [];

/* Техническое задание
Напиши программу, которая на основе одного массива c багажом создаст другой.
Изначальный массив с багажом записан в переменную luggage.
Индекс элемента, с которого нужно начинать добавлять багаж (включая этот элемент), записан в переменную startIndex.
Количество элементов, которые нужно взять с собой записано в переменную quantity.
Собери новый массив на основе изначального, добавляя элементы последовательно (от меньшего индекса к большему). Выбирай определённое количество элементов из массива luggage, начиная с элемента с индексом startIndex, и добавляй их в новый массив. Он должен быть записан в переменную chosenLuggage.
Для добавления элементов в новый массив можешь использовать команду array.push().
*/

const chooseLuggage = (luggage) => {
  return (chosenLuggage = luggage.slice(startIndex, startIndex + quantity));
};

console.log(chooseLuggage(luggage));

// Решение через цикл
// const chooseLuggage = (luggage) => {
//   for(let i=startIndex; i < (startIndex+quantity); i++){
//     chosenLuggage.push(luggage[i]);
//   }
//   return chosenLuggage;
// }

// console.log(chooseLuggage(luggage));
