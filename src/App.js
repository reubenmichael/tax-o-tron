import { Component } from 'react'
import WebFont from 'webfontloader'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import CalculatorView from './views/calculator'
import taxBracketsAll from './utils/constants/tax-brackets.constants'

WebFont.load({
  google: {
    families: ['Lato']
  }
})

class App extends Component {

  // Set default state
  state = {
    country:'Australia',
    taxYear: 2020,
    taxableIncome: Number(70000),
    taxBrackets: taxBracketsAll.Australia[2020]
  }

  render () {
    const { country, taxYear, taxableIncome, taxBrackets } = this.state

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/calculator" />
          </Route>
          <Route exact path="/calculator">
            <CalculatorView country={country} taxYear={taxYear} taxableIncome={taxableIncome} taxBrackes={taxBrackets} />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }

}



export default App
