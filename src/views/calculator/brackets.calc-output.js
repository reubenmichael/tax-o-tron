import { Fragment } from 'react'
import { TextField } from '@material-ui/core'

const Brackets = (props) => {

    return (
        <Fragment>
            <TextField InputProps={{readOnly: true}} variant="outlined"/>
        </Fragment>
    )
}

export default Brackets