/* Техническое задание

Мяу! Напиши программу, которая будет анализировать мой суточный рацион.
Оформи программу в виде функции getDiet. Она должна принимать два параметра: массив с калорийностью блюд и лимит калорий на день. Названия параметров могут быть любыми.
Программа должна возвращать количество блюд из массива, которые я могу съесть и не превысить допустимые калории. Блюда будут съедаться по порядку, начиная с первого элемента в массиве.

*/

([10, 20, 30, 40, 90], 100)(
  // ожидаемый максимум: 4 блюда
  [12, 27, 9, 20, 12, 13, 35],
  90
)(
  // ожидаемый максимум: 5 блюд
  [20, 21, 15, 20, 13, 10, 29, 22, 10],
  150
); // ожидаемый максимум: 8 блюд
