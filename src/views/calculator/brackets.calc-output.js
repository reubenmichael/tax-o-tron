import { TextField, Grid } from '@material-ui/core'
// import reductionAmountsCalculation from '../../utils/helpers/reduction-amounts-calculation'
import bracketAmountsCalculation from '../../utils/helpers/bracket-amounts-calculation'

const Brackets = (props) => {
    // const reductionAmounts = reductionAmountsCalculation(props.taxBrackets)
    const bracketAmounts = bracketAmountsCalculation(props.taxableIncome, props.taxBrackets)
    let lowerLimit = 0
    const grids = props.taxBrackets.map((entry, index) => {
        const id = 'bracket-index-' + {index}
        const label = lowerLimit + ' - ' + entry[0]
        const value = bracketAmounts[index]
        lowerLimit = entry[0]

        return (
            <Grid item>
                <TextField id={id} label={label} value={value} InputProps={{readOnly: true}} variant="outlined"/>
            </Grid>
        )
    })
    return grids
}

export default Brackets