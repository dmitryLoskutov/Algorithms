function bindingAlg() {

	const funObj = {
		fibonacci: fibonacci,
		euclid: euclid
	};

	const formControl = document.querySelector('#inCntrl').value;
	let result = 0;

	document.querySelector('#algorithms').addEventListener('click', function (elem) {

		result = funObj[elem.target.id](formControl.value);
	});

	document.getElementById('submit').onclick = function () {
		document.getElementById('outCntrl').value = result.value;
	};


}

