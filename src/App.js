import React, { Component } from 'react';
import './App.css';

import currencies from './currencies';
import Ticker from "./Ticker/Ticker";

class App extends Component {
  state = {
    activePairs: []
  };

  handleCheckbox = currency => (event) => {
    const { checked } = event.target;

    this.setState(({ activePairs }) => {
        let pairs = [...activePairs];
        if(checked){
            pairs.push(currency);
        } else {
            pairs = pairs.filter(pair => pair !== currency)
        }
        return{
            activePairs: pairs,
        }
    })

  };



  render() {
    return (
      <div className="App">
        <aside>
            <ul className="currList">
                {currencies.map(curr => (
                    <li key={curr} className="currItem">
                        <input type="checkbox" id={curr} onChange={this.handleCheckbox(curr)} />
                        <label htmlFor={curr}>{curr.toUpperCase()}</label>
                    </li>
                ))}
            </ul>
        </aside>
        <main>
            {currencies.map(pair => <Ticker key={ pair } pair={ pair } isActive={this.state.activePairs.includes(pair)} />)}
        </main>
      </div>
    );
  }
}

export default App;
