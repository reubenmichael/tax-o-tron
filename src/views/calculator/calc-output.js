import React, { Fragment } from 'react'
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
                    <TaxOnTaxableIncomeCalcOutput taxableIncome={props.taxableIncome} taxBrackets={props.taxBrackets} />
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        Breakdown:
                    </Typography>
                </Grid>
                <Fragment>
                    <BracketsCalcOutput taxableIncome={props.taxableIncome} taxBrackets={props.taxBrackets} />
                </Fragment>
            </Grid>
        </Fragment>
    )
}

export default CalcOutput