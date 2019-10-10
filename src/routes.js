import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './home/home'
import About from './about/about'

const Routes = ()=> {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Route exact path='/' component={ App }></Route>
        <Route exact path='/about' component={ About }></Route>
      </BrowserRouter>
    </Provider>
  )
}

export default Routes;