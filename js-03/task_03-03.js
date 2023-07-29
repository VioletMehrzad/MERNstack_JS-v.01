const userScore_1 = +prompt("Enter Scores!")
const userScore_2 = +prompt("Enter Scores!")
const userScore_3 = +prompt("Enter Scores!")
const userScore_4 = +prompt("Enter Scores!")
const userScore_5 = +prompt("Enter Scores!")

function average(a, b, c, d, e) {
    if (!isNaN(a + b + c + d + e)) {
        return (a + b + c + d + e) / 5
    }
    return 'ERR! INVALID NUMBERS!'
}

const userAverage = average(userScore_1, userScore_2, userScore_3, userScore_4, userScore_5)
console.log(userAverage)


if (userAverage >= 12) {
    console.log('Passed!')
} else {
    console.log('Failed!')
}
