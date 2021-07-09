
export default bracketAmountsCalculation = (taxableIncome, taxBrackets, reductionAmounts) => {
    let bracketAmounts = []
    let thisBracketAmount = 0
    for (let i = 0; i < taxBrackets.length; i++) {
        const upperLimit = taxBrackets[i][0]
        const lowerLimit = taxBrackets[i-1] ? taxBrackets[i-1][0] : 0
        const taxRate = taxBrackets[i][1]

        if (taxableIncome > lowerLimit && taxableIncome <= upperLimit) {
            thisBracketAmount = (
                (taxableIncome - lowerLimit) * taxRate
            )
        } else if (taxableIncome > upperLimit) {
            thisBracketAmount = (
                (upperLimit - lowerLimit) * taxRate
            )
        } else {
            thisBracketAmount = 0
        }

        bracketAmounts.push(thisBracketAmount)
    }
    return bracketAmounts
}
