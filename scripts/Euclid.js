function euclid(fstValue, scdValue) {
	if (fstValue == 0) {
		return scdValue;
	} else if (scdValue == 0) {
		return fstValue;
	} else if (fstValue >= scdValue) {
		return euclid(fstValue % scdValue, scdValue);
	} else if (fstValue <= scdValue) {
		return euclid(fstValue, scdValue % fstValue);
	}

}
