import { Component } from 'react'
import { TextField, MenuItem, Button, Grid } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import countries from '../../utils/constants/countries.constants'
import taxYear from '../../utils/constants/tax-year.constants'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            country: this.props.country,
            taxYear: this.props.taxYear,
            taxableIncome: this.props.taxableIncome,
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state)
    }

    render () {
        return (
            <form noValidate autoComplete="off" onSubmit={this.onFormSubmit}>
                <Grid container direction="column" justify="flex-start" alignItems="flex-start" spacing={2}>
                    <Grid item>
                        <Alert variant="outlined" severity="info">
                            Fields marked with a * are mandatory
                        </Alert>
                    </Grid>
                    <Grid item>
                        <TextField required={true} id="select-coutry" select label="Country" name="country" helperText="Please select your country of residence" variant="outlined" value={this.state.country} onChange={this.handleChange} >
                            {countries.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item>
                        <TextField required={true} id="select-tax-year" select label="Tax Year" name="taxYear" helperText="Select an income year" variant="outlined" value={this.state.taxYear} onChange={this.handleChange} >
                            {taxYear.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item>
                        <TextField required={true} id="input-taxable-income" label="Taxable Income" name="taxableIncome" helperText="Enter your total taxable income for the income year" variant="outlined" value={this.state.taxableIncome} onChange={this.handleChange} >
                            {this.state.taxableIncome}
                        </TextField>
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" color="primary">
                            Calculate
                        </Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default Form
