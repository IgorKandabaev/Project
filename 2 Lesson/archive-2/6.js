"use strict";
/**
 * функция подбирает нужное окончание
 * @param {*} count
 * @param {*} one
 * @param {*} two
 * @param {*} five
 * @returns
 */
function declinationOfNumber(count, one, two, five) {
	const n10 = count % 10;
	const n100 = count % 100;

	if (n100 > 10 && n100 < 21) {
		return five;
	}

	if (n10 === 1) {
		return one;
	} else if (n10 > 1 && n10 < 5) {
		return two;
	} return five;
}

const applesNumber = 1181;

const word = declinationOfNumber(applesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${applesNumber} ${word}.`);



console.log(declinationOfNumber(1, "яблоко", "яблока", "яблок")); // "яблоко"
console.log(declinationOfNumber(2, "мяч", "мяча", "мячей")); // "мяча"
console.log(declinationOfNumber(5, "стул", "стула", "стульев")); // "стульев"



const array = [
	[10, 20, 30],
	[30, 40, 50],
	[44, 23, 67]
];
