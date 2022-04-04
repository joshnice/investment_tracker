import React, { Component } from 'react';
import HomeComponent from './components/home';
import OverviewComponent from './components/overview';
import { Routes,BrowserRouter, Route } from "react-router-dom";
import NotFoundComponent from './components/not-found';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeComponent/>} />
            <Route path="/overview" element={<OverviewComponent/>} />
            <Route path="*" element={<NotFoundComponent/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;