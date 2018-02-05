

class Item {
	constructor(weight, value) {
		this.weight = weight;
		this.value = value;
	}
}

function compare(firstNumber, secondNumber) {
	const firstResult = firstNumber[0][0] / firstNumber[0][1];
	const secondResult = secondNumber[0][0] / secondNumber[0][1];
	if (firstResult >= secondResult) {
		return firstResult;
	}
	return secondResult;
}

function knapsack(arrayOfValueWeight) {

	const capasity = arrayOfValueWeight[0][0];
	let helt = arrayOfValueWeight[0][1];
	let items = [];
	for (let i = 0; i < capasity - 1; i++) {
		items.push(new Item(arrayOfValueWeight[i + 1][0], arrayOfValueWeight[i + 1][1]));
	}
	for (let i = 1; i < capasity; i++) {
		items[i] = compare(items[i], items[i + 1]);
	}
	let result = 0;
	items.forEach((item) => {
		if (item.weight <= helt) {
			result += item.value;
			helt -= item.weight;
		} else {
			result += item.value * (helt / item.weight);
			throw result;
		}

	});
	return result;
}

