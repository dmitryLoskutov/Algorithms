

class Item {
	constructor(value, weight) {
		this.value = value;
		this.weight = weight;
	}
}


function knapsack(arrayOfValueWeight) {

	const capasity = arrayOfValueWeight[0][0];
	let helt = arrayOfValueWeight[0][1];

	const items = [];
	for (let i = 0; i < capasity; i++) {
		items.push(new Item(arrayOfValueWeight[i + 1][0], arrayOfValueWeight[i + 1][1]));
	}

	for (let i = 0; i < capasity; i++) {
		for (let j = 0; j < capasity - i - 1; j++) {
			if ((items[j].value / items[j].weight) < (items[j + 1].value / items[j + 1].weight)) {
				const tmp = [];
				tmp.push(items[j].value, items[j].weight);
				items[j].value = items[j + 1].value;
				items[j].weight = items[j + 1].weight;
				items[j + 1].value = tmp[0];
				items[j + 1].weight = tmp[1];
			}
		}
	}

	let result = 0;
	items.forEach((item) => {
		if (item.weight <= helt) {
			result += item.value;
			helt -= item.weight;
		} else {
			result += item.value * (helt / item.weight);
			helt=0;
		}

	});
	return result;
}

