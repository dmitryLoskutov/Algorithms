

class Item {
	constructor(weight, value) {
		this.weight = weight;
		this.value = value;
	}
}

function compare(fstNumber, scdNumber) {
	const fstResult = fstNumber[0][0] / fstNumber[0][1];
	const scdResult = scdNumber[0][0] / scdNumber[0][1];
	if (fstResult >= scdResult) {
		return fstResult;
	}
	return scdResult;
}

function knapsack(array) {

	const capasity = array[0][0];
	let helt = array[0][1];
	let items = new Item();
	for (let i = 0; i < capasity - 1; i++) {
		items[i] = new Item(array[i + 1][0], array[i + 1][1]);
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

