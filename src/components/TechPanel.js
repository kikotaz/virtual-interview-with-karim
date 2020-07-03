import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import ReactLogo from '../media/react-icon.svg';
import ReduxLogo from '../media/redux-icon.svg';
import MaterialUILogo from '../media/materialui-icon.svg';
import GitHubLogo from '../media/github-icon.svg';
import AzureLogo from '../media/azure-icon.svg';
import GithubActionsLogo from '../media/githubactions-icon.svg';
import { makeStyles } from '@material-ui/core/styles';

const useCardStyles = makeStyles(({breakpoints}) => ({
    grid: {
        [breakpoints.up('sm')]: {
            justifyContent: 'center',
        },
        marginBottom: '2em',
    },
    card: {
        height: '100%',
        textAlign: 'center',
        borderColor: '#123C69',
    },
    content: ({ color }) => {
        return {
            backgroundColor: color,
            color: '#123C69',
            height: '100%',
        }
    },
    image: {
        height: 'auto',
        width: '50%',
        maxHeight:'15%',
    },
    paragraph: {
        textJustify: 'auto',
    }
}))

const techs = {
    details: [
        {
            logo: ReactLogo,
            alt: 'ReactJS logo',
            name: 'React',
            description: "Implementned functional components through the whole application, "
            + "while applying the new awesome React Hooks to control components' state and effects. " +
            "That doesn't meant that I can't use class based componenets :-), I just prefer simpler " +
            "code and reusability. Besides, all the HTTP requests are made with Axios instead of fetch.",
        },
        {
            logo: ReduxLogo,
            alt: 'ReduxJS logo',
            name: 'Redux',
            description: "Used it to keep some values in global state, such as your name " + 
            "(if provided) and the background color, which you can change in the small color " +
            "panel in Welcome page. I have used single reducer for that since my website is small, " +
            "but I am pretty sure I can handle multiple reducers if required ;-)."
        },
        {
            logo: MaterialUILogo,
            alt: 'Material-UI logo',
            name: 'Material UI',
            description: "Why re-invent the wheel in creating common layouts, while we should " +
            "focus on making new awesome features and building what users really need? I have " +
            "to admit that UI design is not one of my strengths. However, this awesome library " +
            "helped in accelerating my development and making my website look close to professional."
        },
        {
            logo: GitHubLogo,
            alt: 'Github logo',
            name: 'GitHub',
            description: "A developer without a GitHub account is like a fish without water. " +
            "You can find the repository for this project in the link below",
            link: 'https://github.com/kikotaz/virtual-interview-with-karim',
        },
        {
            logo: AzureLogo,
            alt: 'Azure logo',
            name: 'Azure App Services',
            description: "This website is hosted on Azure App Service instance. It is not my " +
            "first deployment into cloud though, as I have deployed apps into AWS and GCP before." +
            "So far this website code is running on code-based instance. In the coming updates I " +
            "plan to containerize it with some other tricks in my mind :-)."
        },
        {
            logo: GithubActionsLogo,
            alt: 'GitHub Actions logo',
            name: 'CI/CD with GitHub Actions',
            description: "Automation is simply awesome. I have easily configured push-build-deploy " +
            "pipeline on GitHub actions to do all the hard repetitive work on my behalf. " + 
            "It is not my first CI/CD experience though, as I have used Jenkins and GitLab for " +
            "some small projects before as well."
        },
    ]
}

function TechPanel(props) {

    const cardStyles = useCardStyles({ color: props.bgclr });

    return (
        <Grid container spacing={2} justify='center' className={cardStyles.grid}
        direction='row'>
            {
                techs.details.map((tech, index) => {
                    return (
                        <Grid item key={index} direction='column' sm={12} md={6}>
                            <Card
                                variant='outlined'
                                className={cardStyles.card}>
                                <CardContent className={cardStyles.content}>
                                    <img src={tech.logo} alt={tech.alt}
                                        className={cardStyles.image} />
                                    <h3>{tech.name}</h3>
                                    <p className={cardStyles.paragraph}>{tech.description}</p>
                                    {
                                        tech.link ? 
                                        <a 
                                        href={tech.link} 
                                        target='_blank'
                                        rel='noopener noreferrer'>{tech.link}</a>
                                        : null
                                    }
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default TechPanel;