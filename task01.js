/*
let fahrenheitTemperature = 77;

Техническое задание

Напиши программу, которая будет переводить градусы Фаренгейта в температуру по Цельсию.
В переменной fahrenheitTemperature указаны градусы по Фаренгейту.
Формула расчёта выглядит так: Tc = 5/9 * (Tf - 32).
Результат вычислений запиши в переменную celsiusTemperature.
*/

let fahrenheitTemperature;

const celsiusTemperature = (fahrenheitTemperature) => {
  return (5 / 9) * (fahrenheitTemperature - 32);
};

console.log(celsiusTemperature(77));
