import { Fragment } from 'react'
import { TextField } from '@material-ui/core'
import reductionAmountsCalculation from '../../utils/helpers/reduction-amounts-calculation'
import taxOnTaxableIncomeCalculation from '../../utils/helpers/tax-on-taxable-income-calculation'

const TaxOnTaxableIncome = (props) => {
    const reductionAmounts = reductionAmountsCalculation(props.taxBrackets)
    const taxOnTaxableIncome = taxOnTaxableIncomeCalculation(props.taxableIncome, props.taxBrackets, reductionAmounts)

    return (
        <Fragment>
            <TextField id="tax-on-taxable-income-output" value={taxOnTaxableIncome} InputProps={{readOnly: true}} variant="outlined" />
        </Fragment>
    )
}

export default TaxOnTaxableIncome
