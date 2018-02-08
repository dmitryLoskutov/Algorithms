function huffman(arrayOfChar) {
	const charMap = new Map();
	for (let i = 0; i < arrayOfChar.length; i++) {
		const char = arrayOfChar.charAt(i);
		if (charMap.has(char)) {
			charMap.set(char, charMap.get(char) + 1);
		} else {
			charMap.set(char, 1);
		}
	}
}
