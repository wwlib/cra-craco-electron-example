import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Logo from './Logo/Logo';
import TestFs from './model/TestFs';

class App extends Component {

    handleClick(event: any): void {
        console.log(`handleClick`, event);
        TestFs.test();
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <Logo clicked={(event: any) => this.handleClick(event)}/>
            </header>
          </div>
        );
    }
}

export default App;
