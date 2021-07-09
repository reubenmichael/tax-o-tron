import { Component } from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

class CalcInputUneditable extends Component {
    render () {
        return (
            <Box>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <Typography variant="h4">
                            Your tax results
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default CalcInputUneditable
