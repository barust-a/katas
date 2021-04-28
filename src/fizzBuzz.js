export function fizzBuzz(number) {
		const isFive = /5/.test(number.toString())
		const isThree = /3/.test(number.toString())
		let toPrint = ""
		if (number % 3 === 0 || isThree) {
			toPrint += "Fizz"
		}
		if (number % 5 === 0 || isFive) {
			toPrint += "Buzz"
		}
		else if (!toPrint) {
			toPrint = number
		}
		return toPrint
}

function main() {
	for (let i = 1; i <= 100; i++) {
		console.log(fizzBuzz(i))
	}
}
main()