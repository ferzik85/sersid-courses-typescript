function formatDate(date) {
	return date?.replaceAll('/', '.') ?? '';
}

export default formatDate;
