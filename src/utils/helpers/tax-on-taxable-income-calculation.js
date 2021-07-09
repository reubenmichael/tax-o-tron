
export default taxOnTaxableIncomeCalculation = (taxableIncome, taxBrackets, reductionAmounts) => {
    let taxOnTaxableIncome = null
    for (let i = 0; i < taxBrackets.length; i++) {
        const upperLimit = taxBrackets[i][0]
        const lowerLimit = taxBrackets[i-1] ? taxBrackets[i-1][0] : 0
        const taxRate = taxBrackets[i][1]
        const reductionAmount = reductionAmounts[i]
        if (taxableIncome > lowerLimit && taxableIncome <= upperLimit) {
            taxOnTaxableIncome = (
                (taxableIncome * taxRate) - reductionAmount
            )
        }
    }
    return taxOnTaxableIncome
}
