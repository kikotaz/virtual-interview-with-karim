import React from 'react';
import { connect } from 'react-redux';
import './AboutMe.css'
import { Grid, TextField } from '@material-ui/core';
import PrivacyTooltip from '../../../components/PrivacyTooltip';

function AboutMe(props) {
    document.title = 'A little bit about me';
    return (
        <div className='about-me'>
            <Grid container justify="center">
                <Grid item xs={9}>
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
                            I was born 06 October
                        </li>
                    </ul>
                    <h3>
                        Why don&#39;t you share your birthday with me and I will show you
                        something cool!
                    </h3>
                    <form noValidate style={{ marginBottom: '100px' }}>
                        <Grid container justify='center'>
                            <PrivacyTooltip>
                                <TextField
                                    id='bd'
                                    label='Your Birthday'
                                    type='date'
                                    variant='outlined'
                                    inputProps={{ style: { fontSize: '20px' } }}
                                    InputLabelProps={{ shrink: true }} />
                            </PrivacyTooltip>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userName: state.userName,
    }
}


export default connect(mapStateToProps)(AboutMe);