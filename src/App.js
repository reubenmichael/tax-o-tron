import React, { Component } from 'react'
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
    country: 'Australia',
    taxYear: 2021,
    taxableIncome: Number(70000),
    taxBrackets: taxBracketsAll.Australia[202]
  }

  handleSubmit = formContents => {
    let country = formContents.country
    let taxYear = formContents.taxYear
    let taxableIncome = formContents.taxableIncome
    let taxBrackets = taxBracketsAll[country][taxYear]
    this.setState({
      country: country,
      taxYear: taxYear,
      taxableIncome: taxableIncome,
      taxBrackets: taxBrackets
    })
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
            <CalculatorView country={country} taxYear={taxYear} taxableIncome={taxableIncome} taxBrackets={taxBrackets} handleSubmit={this.handleSubmit}/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App
