import { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import TaxOnTaxableIncomeCalcOutput from './tax-on-taxable-income.calc-output'
import BracketsCalcOutput from './brackets.calc-output'

const CalcOutput = (props) => {
    return (
        <Fragment>
            <Grid container direction="column" justify="flex-start" alignItems="flex-start" spacing={2}>
                <Grid item>
                    <Typography variant="h6">
                        Your estimated taxable income is:
                    </Typography>
                </Grid>
                <Grid item>
                    <TaxOnTaxableIncomeCalcOutput />
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        Breakdown:
                    </Typography>
                </Grid>
                <Grid item>
                    <BracketsCalcOutput />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default CalcOutput