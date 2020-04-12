import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Containers/Home'
import CompanyDetails from '../Containers/CompanyDetails'

export class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/company_overview">
                    <CompanyDetails />
                </Route>
            </Switch>
        )
    }
}

export default Router
