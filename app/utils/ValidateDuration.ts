function validateDuration(str: string): boolean {
	const num = Number(str);
	return Number.isFinite(num) && num > 0;
}

export default validateDuration;
