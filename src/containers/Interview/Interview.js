import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './Interview.css';
import Welcome from './Welcome/Welcome';
import Intro from './Intro/Intro'

//This component will mainly contain navigation and routes
class Interview extends Component {
    render() {
        return (
            //Website header with navigation links       
            <div className='Interview'>
                <header>
                    <nav>
                        <ul className='nav-list'>
                            <li><NavLink to='/'>Welcome</NavLink></li>
                            <li><NavLink to='/intro'>Introduction</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*Configuring Switch to rerender exact page requested*/}
                <Switch>
                    <Route path='/intro'>
                        <Intro />
                    </Route>
                    <Route path='/'>
                        <Welcome />
                    </Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        pages: state.pages,
    };
}

export default connect(mapStateToProps)(Interview);