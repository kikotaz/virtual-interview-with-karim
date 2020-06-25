import React from 'react';
import { connect } from 'react-redux';
import './Intro.css'
import { Grid } from '@material-ui/core';
import MoodIcon from '@material-ui/icons/Mood';

function Introduction(props) {
    return (
        <div className='Introduction'>
            <Grid container justify="center">
                <Grid item xs={6}>
                    <h2>Hi {props.userName}</h2>
                    <p>As I mentioned in the Welcome page my name is Karim Saleh.
                    I am a graduate Software Engineer, who is looking for the right
                    chance to pursue his career in the industry. My passion about
                    Software Development has always been my motive to go through a
                    career change to become a Software Engineer.
                    </p>
                    <h2>Why this web application?</h2>
                    <p>My main motive to build this web app is to make it as a small
                    portfolio for myself, which I believe is a must have in this stage 
                    of my career. Honestly, it is not easy to find a job recently, 
                    especially with Covid-19 condition. Besides, my job applications 
                    have all been turned down. Thus, I thought it is a good idea to 
                    virtualize an interview and make myself a bit more intersting for 
                    recruiters <MoodIcon fontSize="small"/>. Through this web app, I 
                    try to highlight some of my skills and personality at the same time. 
                    That's why you might find it a bit honest, informal and friendly. 
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


export default connect(mapStateToProps)(Introduction);