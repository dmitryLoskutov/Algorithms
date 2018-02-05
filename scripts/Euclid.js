function euclid(Arr) {
	if (Arr[0] == 0) {
		return Arr[1];
	} else if (Arr[1] == 0) {
		return Arr[0];
	} else if (Arr[0] >= Arr[1]) {
		const temp = Arr[0] % Arr[1];
		let someArray = [temp, Arr[1]];
		return euclid(someArray);
	} else if (Arr[0] <= Arr[1]) {
		const temp = Arr[1] % Arr[0];
		let someArray = [Arr[0], temp];
		return euclid(someArray);
	}

}
