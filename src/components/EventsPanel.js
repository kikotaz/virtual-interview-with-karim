import React, { useState, useEffect, useRef } from 'react';
import { Pagination } from '@material-ui/lab';
import { Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Configuring styles for Events Panel
const useCardStyles = makeStyles(() => ({
    grid: {
        marginBottom: '10px',
    },
    card: {
        height: '300px',
        width: '100%',
    },
    content: {
        height: '250px',
    },
    paragraph: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxHeight: '100px',
    },
}))

//This component for the Events Panel in About Me page
function EventsPanel(props) {

    //Configurig Events Panel Cards layout
    const cardStyles = useCardStyles();

    //Configuring props and state
    const data = props.events;
    const [eventCard, setEventCard] = useState(1);
    const eventsRef = useRef();

    //Pagination handler to change chosen historical Event
    const changeEventHandler = (event, value) => {
        setEventCard(value);
    }

    //Scrolling to the Event Panel
    useEffect(() => {
        eventsRef.current.scrollIntoView({ behavior: 'smooth' })
    })

    return (
        <Grid container justify='center'>
            <Grid item>
                <h3>Wow! Those historical events match your birthday</h3>
            </Grid>
            <Grid item className={cardStyles.grid} justify='center' xs={12}>
                <Card
                    variant='outlined'
                    className={cardStyles.card}
                    style={{ backgroundColor: props.bgclr }}>
                    <CardContent className={cardStyles.content}>
                        <h4>{props.date + ', ' + data[eventCard - 1].year}</h4>
                        <h3>{data[eventCard - 1].wikipedia[0].title}</h3>
                        <p
                            className={cardStyles.paragraph}
                            ref={eventsRef}>
                            {data[eventCard - 1].description}
                        </p>
                        <a
                            href={data[eventCard - 1].wikipedia[0].wikipedia}
                            target='_blank'
                            rel="noopener noreferrer"
                        >read more</a>
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