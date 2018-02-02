const funObj = {
	fibonacci: fibonacci,
	euclid: euclid
};

const formControl = document.querySelector('#inCntrl');
let currentSelection;

document.querySelector('#algorithms').addEventListener('click', function (evt) {
	currentSelection = evt.target.value;
});

document.getElementById('submit').addEventListener('click', function (evt) {
	document.getElementById('outCntrl').value = funObj[currentSelection](formControl.value);
});
