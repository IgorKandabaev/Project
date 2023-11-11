startGames();

function startGames() {
	let riddle = getRandomGenerator();
	while (true) {
		let ansver = prompt('угадайте 4 значное число').split("");
		let result = getBulsCowsCount(riddle, ansver);
		console.log(
			`вы ввели значение ${ansver} количество быков ${result.bulsCount} количество коров ${result.cowsCount} ${riddle}  `
		);
		if (riddle.toString() == ansver.toString()) {
			console.log('yor win');
			break;
		}
	}
}

function getRandomGenerator() {
	let generator = String(Math.random() * 100000000000);
	let result = [];
	for (let value of generator) {
		if (!result.includes(value)) {
			result.push(value);
		}
		if (result.length == 4) {
			return result;
		}
	}
}

function getBulsCowsCount(riddle, ansver) {
	let bulsCount = getBulsCount(riddle, ansver);
	let cowsCount = gerCowsCount(riddle, ansver);
	return {
		"bulsCount": bulsCount,
		"cowsCount": cowsCount - bulsCount,
	}
}

function getBulsCount(riddle, ansver) {
	let count = 0;
	for (let i = 0; i < riddle.length; i++) {
		if (riddle[i] == ansver[i]) {
			count++;
		}
	}
	return count;
}



function gerCowsCount(riddle, ansver) {
	let count = 0;
	for (value of riddle) {
		if (ansver.includes(value)) {
			count++;
		}
	}
	return count;
}


