import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from './../comps/Landing'
import Events from './../comps/Events'
import Contact from './../comps/Contact'
import ForAdmin from './../comps/ForAdmin'

export default(
    <Switch>
         <Route component = {Landing} exact path = '/' /> 
            {/* //home page */}
        



        {/* <Route component = {Events} path = '/events' /> */}
            {/* // events page */}
        {/* <Route component = {Contact} path = '/contact' /> */}
            {/* //contact page */}

        <Route component = {ForAdmin} path = '/admin'/>
            {/* foradmin page */}


    </Switch>
)
