import { Component } from 'react'
import { TexField, MenuItem, Button, Grid } from '@material-ui/core'
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
            <form>

            </form>
        )
    }
}

export default Form
