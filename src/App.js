import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'
import HomeContainer from './container/HomeContainer';
import { BrowserRouter, Route  } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <JumbotronComponent />
                <BrowserRouter>
                <Route path="/" exact>
                    <HomeContainer/>
                </Route>
                </BrowserRouter>
            </div>
        );
    }
}

