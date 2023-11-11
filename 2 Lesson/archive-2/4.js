"use strict";


/**
 *  функция складывает переменые
 * @param {*} a
 * @param {*} b
 * @returns
 */
function sum(a, b) {
	return a + b;
}

console.log(sum(2, 4));

/**
 * функция вычитает из большего меньшее
 * @param {*} a
 * @param {*} b
 * @returns
 */
function difference(a, b) {
	if (a > b) {
		return a - b;
	} else {
		return b - a;
	}
}
console.log(difference(2, 4));

/**
 * перемножает числа
 * @param {*} a
 * @param {*} b
 * @returns
 */
function multiplication(a, b) {
	return a * b;
}

console.log(multiplication(3, 2));

/**
 * делит переменые
 * @param {*} a
 * @param {*} b
 * @returns
 */

function division(a, b) {
	return a / b;
}

console.log(division(10, 2));
