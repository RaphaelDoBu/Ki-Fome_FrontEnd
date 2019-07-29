import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import TodasComidas from '../components/TodasComidas'
import Chinesa from '../components/Chinesa'

export default props => (

    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/todasComidas' component={TodasComidas}></Route>
                <Route path='/chinesa' component={Chinesa}></Route>
                <Redirect from='*' to='/'></Redirect>
            </Switch>
        </div>
    </BrowserRouter>
)