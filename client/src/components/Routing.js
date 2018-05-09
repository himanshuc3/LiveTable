import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import LandingPage from './LandingPage';

export default class WeekContainer extends Component {

    render() {

        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/timetable" exact component={App} />
                </Switch>
            </Router>
        );
    }
}