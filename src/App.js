import { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/calculator" />
          </Route>
          <Route exact path="/calculator">
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }

}



export default App
