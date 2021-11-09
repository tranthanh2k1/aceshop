import React from 'react'
import HomePage from './pages/website/home/index'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

const Routers = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/home">
                    <HomePage {...props} />
                </Route>
            </Switch>
        </Router>

    )
}

export default Routers