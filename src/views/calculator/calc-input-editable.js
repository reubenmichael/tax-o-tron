import React, { Component, Fragment } from 'react'
import { Typography } from '@material-ui/core'
import Form from './form.calc-input-editable'

class CalcInput extends Component {
    render () {
        return (
            <Fragment>
                <Typography variant="h4">
                    Calculate your tax
                </Typography>
                <Form />
            </Fragment>
        )
    }
}

export default CalcInput
