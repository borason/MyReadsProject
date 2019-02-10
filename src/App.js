import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'

class App extends React.Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={ Home } />
        <Route exact path="/search" component={ Search } />
      </div>
    )
  }
}

export default App
