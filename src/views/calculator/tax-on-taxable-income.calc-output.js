import { Fragment } from 'react'
import { TextField } from '@material-ui/core'

const TaxOnTaxableIncome = (props) => {
    
    return (
        <Fragment>
            <TextField id="tax-on-taxable-income-output" label="The ATO's share:" value={TaxOnTaxableIncome} InputProps={{readOnly: true}} variant="outlined" />
        </Fragment>
    )
}

export default TaxOnTaxableIncome
