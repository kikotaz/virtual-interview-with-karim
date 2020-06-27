import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './Interview.css';
import Welcome from './Welcome/Welcome';
import AboutMe from './AboutMe/AboutMe';
import CustomTabs from '../../components/CustomTabs';
import CustomTab from '../../components/CustomTab';

//This component will mainly contain navigation and routes
function Interview(props) {

    //Creating object of pages
    const navigation = {
        pages: [
            {path: '/', label: 'Welcome',},
            {path: '/about-me', label: 'About Me'},
        ],
    }

    //Handler for Navigation tab changed
    const selectionHandler = (event, value) => {
        props.history.push(value);
    }

    return (
        //Website Navigation Tabs       
        <div className='Interview'>
            <CustomTabs
                value={props.history.location.pathname || '/'}
                onChange={selectionHandler}
                centered
            >
                {navigation.pages.map((page) => {
                    return(
                        <CustomTab value={page.path} label={page.label} key={page.path}/>
                    )
                })}
            </CustomTabs>
            {/*Configuring Switch to rerender exact page requested*/}
            <Switch>
                <Route path='/about-me'>
                    <AboutMe />
                </Route>
                <Route path='/'>
                    <Welcome />
                </Route>
            </Switch>
        </div>
    );
}

export default withRouter(Interview);