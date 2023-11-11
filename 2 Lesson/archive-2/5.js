"use strict";

/**
 * функция производит операцию с аргументами на основе выбранного оператора
 * @param {*} arg1 первое число
 * @param {*} arg2 второе число
 * @param {*} operation необходимое действие
 * @returns математическое действие
 */
function mathOperation(arg1, arg2, operation) {
	if (operation == '+') {
		return sum(arg1, arg2)
	} else if (operation == '-') {
		return difference(arg1, arg2);
	} else if (operation == '*') {
		return multiplication(arg1, arg2);
	} else if (operation == '/') {
		return division(arg1, arg2);
	} console.log('Вы допустили ошибку в воде');
}

console.log(mathOperation(2, 5, '+'));
console.log(mathOperation(2, 5, '-'));
console.log(mathOperation(2, 5, '*'));
console.log(mathOperation(2, 5, '/'));


function sum(a, b) {
	return a + b;
}

function difference(a, b) {
	if (a > b) {
		return a - b;
	} else {
		return b - a;
	}
}

function multiplication(a, b) {
	return a * b;
}

function division(a, b) {
	return a / b;
}
