import React, { useState, useEffect, useRef } from 'react';
import { Pagination } from '@material-ui/lab';
import { Card, CardContent, Grid } from '@material-ui/core';

function EventsPanel(props) {

    const data = props.events;
    const [eventCard, setEventCard] = useState(1);
    const eventsRef = useRef();

    const changeEventHandler = (event, value) => {
        console.log(value);
        setEventCard(value);
    }

    useEffect(() => {
        eventsRef.current.scrollIntoView({behavior: 'smooth'})
    })

    return (
        <Grid container justify='center'>
            <Grid item>
                <h3>Wow! Those historical events match your birthday</h3>
            </Grid>
            <Grid item style={{marginBottom: '10px'}}>
                <Card variant='outlined'>
                    <CardContent>
                        <p
                            ref={eventsRef}>
                            {data[eventCard - 1].description}
                        </p>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Pagination
                    shape="rounded"
                    count={props.events.length}
                    page={eventCard}
                    onChange={changeEventHandler} />
            </Grid>
        </Grid>
    )
}

export default EventsPanel