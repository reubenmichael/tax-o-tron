
export default reductionAmountsCalculation = (taxBrackets) => {
    let reductionAmounts = []
    for (let i = 0; i < taxBrackets.length; i++) {
        
        const thisTaxRate = taxBrackes[i][1]
        const previousTaxRate = taxBrackets[i-1] ? taxBrackets[i-1][1] : 0
        const previousUpperLimit = taxBrackets[i-1] ? taxBrackets[i-1][0] : 0
        const previousReductionAmount = reductionAmounts[i-1] ? reductionAmounts[i-1] : 0

        const thisReductionAmount = Math.round(
            ((thisTaxRate - previousTaxRate) * previousUpperLimit) + previousReductionAmount 
        )
        reductionAmounts.push(thisReductionAmount)
    }
    return reductionAmounts
}