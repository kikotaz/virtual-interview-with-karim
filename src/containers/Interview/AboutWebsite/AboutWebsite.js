import React from 'react';
import { Grid } from '@material-ui/core';
import MoodIcon from '@material-ui/icons/Mood';
import TechPanel from '../../../components/TechPanel';

function AboutWebsite(){

    document.title = 'Why this website?';

    return(
        <div className='about-website'>
            <Grid container justify='center'>
                <Grid item xs={6}>
                    <h2>Motivation</h2>
                    <p>My main motive to build this web app is to make it as a small
                    portfolio for myself, which I believe is a must have in this stage 
                    of my career. Honestly, it is not easy to find a job recently, 
                    especially with Covid-19 condition. Besides, my job applications 
                    have all been turned down. Thus, I thought it is a good idea to 
                    virtualize an interview and make myself a bit more intersting for 
                    recruiters <MoodIcon fontSize="small"/>. Through this web app, I 
                    try to highlight some of my skills and personality at the same time. 
                    That&#39;s why you might find it a bit honest, informal and friendly. 
                    </p>
                    <h2>Tech used</h2>
                    <p>
                        To develop this website, I have used the following 
                    </p>
                    <TechPanel />
                </Grid>
            </Grid>
        </div>
    )

}

export default AboutWebsite;