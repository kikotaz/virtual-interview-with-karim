import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import EventsPanel from '../../../components/EventsPanel';
import { Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import axios from 'axios';
import { isValid, getDate, getMonth, isToday } from 'date-fns';

//This component for AboutMe page
function AboutMe(props) {

    document.title = 'A little bit about me';

    //Adding birthday and results to Component state
    const [birthday, setBirthday] = useState(new Date());
    const [results, setResults] = useState({ status: 0 });
    const url = 'https://byabbe.se/on-this-day/'

    //Using effect to process birthday and fetch day's events
    useEffect(() => {
        setTimeout(() => {
            if (isValid(birthday) && !isToday(birthday)) {
                const [day, month] = [
                    getDate(birthday),
                    getMonth(birthday) + 1,
                ]

                const fetchData = async () => {
                    const response = await axios.get(url + month + '/' + day + '/events.json');
                    setResults(response);
                }
                fetchData();
            }
        }, 500)
    }, [birthday])

    return (
        <div className='about-me'>
            <Grid container justify="center">
                <Grid item xs={6}>
                    <h2>Hi {props.userName}</h2>
                    <p>As I mentioned in the Welcome page my name is Karim Saleh.
                    I am a graduate Software Engineer, who is looking for the right
                    chance to pursue his career in the industry. My passion about
                    Software Development has always been my motive to go through a
                    career change to become a Software Engineer.
                    </p>
                    <h2>Where I live?</h2>
                    <p>I have just finished my postgraduate diploma in IT in New Zealand,
                    and recently I am living in Auckland. My priority is to find a job in
                    New Zealand since I have a Post-Study Open Work Visa valid until
                    January 2023. However, if there are any opportunities for remote work,
                    I will be happy to do it as well. Nothing is better than doing what you
                    really love as a job anywhere around the world.
                    </p>
                    <h2>Some facts about me</h2>
                    <ul className="facts">
                        <li>
                            I am originally Egyptian.
                        </li>
                        <li>
                            I used DOS, Windowns 3.11, dial-up modems, and wrote
                            my first line of code when I was 14 years old (was HTML page).
                        </li>
                        <li>
                            Even though coding gives my chills the most, I love learning
                            new skills and hobbies all the time so I did some photography,
                            learned German, and Forex. Recently cooking and trading
                            Cryptocurrency is what interests me. My bucket list has
                            fishing on top and no where better than New Zealand will
                            to learn that one.
                        </li>
                        <li>
                            I was born 06 October.
                        </li>
                    </ul>
                    <form noValidate style={{ marginBottom: '10px' }}>
                        <Grid container justify='center'>
                            <Grid item>
                                <h3>
                                    Share your birthday and I will show you
                                    something cool!
                                </h3>
                            </Grid>
                            <Grid item>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        autoOk
                                        variant='inline'
                                        inputVariant='outlined'
                                        label='Your birthday'
                                        format='dd/MM/yyyy'
                                        InputAdornmentProps={{ position: "start" }}
                                        value={birthday}
                                        onChange={setBirthday} />
                                </MuiPickersUtilsProvider>
                            </Grid>
                        </Grid>
                    </form>
                    {
                        results.status === 200 ? (
                            <div>
                                <EventsPanel
                                    events={results.data.events.slice(0, 5)}
                                    date={results.data.date}
                                    bgclr={props.bgclr} />
                                <p
                                    style={{ textAlign: 'center' }}>This information is using &nbsp;
                                <a href='https://byabbe.se/on-this-day/'
                                        target='_blank' rel='noopener noreferrer'>On this Day</a>
                                        &nbsp; API</p>
                            </div>
                        )
                            : null
                    }
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        bgclr: state.backgroundColor,
    }
}

export default connect(mapStateToProps)(AboutMe);