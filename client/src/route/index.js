import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../views/home.js'
import Page404 from '../views/404.js'

const Routers = (
  <div>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/test' component={Page404} />
      <Route component={Page404} />
    </Switch>
  </div>
)

export default Routers
