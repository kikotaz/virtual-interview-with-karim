import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';

function TechPanel(){
    return(
        <Grid container spacing={2} justify='flex-start'>
            <Grid item xs={6}>
                <Card 
                variant='outlined'>
                    <CardContent>
                        <h3>React</h3>
                        
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                2
            </Grid>
            <Grid item xs={6}>
                3
            </Grid>
        </Grid>
    )
}

export default TechPanel;