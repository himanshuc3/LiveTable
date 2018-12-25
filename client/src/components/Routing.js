import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import App from './App'
import LandingPage from './LandingPage'
import { Provider } from 'react-redux'
import { ConfigureStore } from '../redux/store/configureStore'

class Routing extends Component{

    componentDidMount(){
        this.props.fetchUser()
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/timetable" exact component={App} />
                </Switch>
            </Router>
        )
    }
}

export default connect(null, actions)(Routing)