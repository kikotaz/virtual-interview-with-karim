import React from 'react';
import { getYear } from 'date-fns';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Grid } from '@material-ui/core';

function Footer() {
    return (
        <Grid container justify='center' spacing={2}>
            <Grid item>
                <span>Developed by Karim Saleh &copy; {getYear(new Date())}</span>
            </Grid>
            <Grid item>
                <GitHubIcon
                    onClick={event => window.location.href = 'https://github.com/kikotaz'} />
            </Grid>
        </Grid>
    )
}

export default Footer;