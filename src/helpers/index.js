export function displayRating(item) {
	let number = null

	if (typeof item === 'object') {
		number = item.level
	}
	let rateNum = Math.floor(number / 3)

	if (number % 3 === 1 || number % 15 === 3) {
		rateNum += 0.5
	}

	return rateNum
}
