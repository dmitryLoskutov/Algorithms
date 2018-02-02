function fibonacci(count) {
	return count <= 1 ? count : fibonacci(count - 1) + fibonacci(count - 2);
}
