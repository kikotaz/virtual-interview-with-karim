import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Interview from './containers/Interview/Interview';

function App(props) {
  return (
    //Setting up routing
    <BrowserRouter>
      <div className="App" style={{backgroundColor: props.bgclr}}>
        <Interview />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return{
      bgclr: state.backgroundColor,
  };
}

export default connect(mapStateToProps)(App);
