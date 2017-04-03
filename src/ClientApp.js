import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './views/Landing'
import '../public/normalize.css'
import '../public/bootstrap.css'
import './assets/scss/main.scss'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
