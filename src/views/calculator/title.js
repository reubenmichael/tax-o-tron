import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

const Title = () => {
    return (
        <Box>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item key="title">
                    <Typography variant="h4">
                        Tax-o-tron
                    </Typography>
                </Grid>
                <Grid item key="subtitle">
                    <Typography variant="h5">
                        The free and simple online tax calculator
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Title
