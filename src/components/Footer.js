import React from 'react';
import { getYear } from 'date-fns';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Grid } from '@material-ui/core';

const footerLinks = {
    links: [
        {
            url: 'https://github.com/kikotaz',
            icon: GitHubIcon,
        },
        {
            url: 'https://www.linkedin.com/in/karim-saleh/',
            icon: LinkedInIcon,
        },
        {
            url: 'mailto:karim.m.saleh@hotmail.com',
            icon: EmailIcon,
        },
    ]
}

function Footer() {
    return (
        <Grid container justify='center' spacing={2} 
        style={{marginTop: '2em'}}>
            <Grid item>
                <span>Developed by Karim Saleh &copy; {getYear(new Date())}</span>
            </Grid>
            {
                footerLinks.links.map((link, index) => {
                    return (
                        <Grid item key={index}>
                            <a 
                            href={link.url} rel='noopener noreferrer' 
                            target='_blank'
                            style={{color: '#123C69'}}>
                                {React.createElement(link.icon)}
                            </a>
                        </Grid>
                    )
                })
            }
        </Grid >
    )
}

export default Footer;