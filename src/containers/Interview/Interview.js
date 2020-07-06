import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import AboutMe from './AboutMe/AboutMe';
import AboutWebsite from './AboutWebsite/AboutWebsite';
import CustomTabs from '../../components/CustomTabs';
import CustomTab from '../../components/CustomTab';
import Footer from '../../components/Footer';
import { Grid } from '@material-ui/core';

//This component will mainly contain navigation and routes
function Interview(props) {

    //Creating object of pages
    const navigation = {
        pages: [
            { path: '/', label: 'Welcome', },
            { path: '/about-me', label: 'About Me' },
            { path: '/about-website', label: 'Why this website?' }
        ],
    }

    //Handler for Navigation tab changed
    const selectionHandler = (event, value) => {
        props.history.push(value);
    }

    return (
        //Website Navigation Tabs       
        <Grid className='Interview' style={{height: '100%'}}>
            <CustomTabs
                value={props.history.location.pathname || '/'}
                onChange={selectionHandler}
                centered
            >
                {navigation.pages.map((page) => {
                    return (
                        <CustomTab value={page.path} label={page.label} key={page.path} />
                    )
                })}
            </CustomTabs>
            {/*Configuring Switch to rerender exact page requested*/}
            <Switch>
                <Route path='/about-website'>
                    <AboutWebsite />
                </Route>
                <Route path='/about-me'>
                    <AboutMe />
                </Route>
                <Route path='/'>
                    <Welcome />
                </Route>
            </Switch>
            <Footer />
        </Grid>
    );
}

export default withRouter(Interview);