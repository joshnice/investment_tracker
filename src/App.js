import React, { Component } from 'react';
import HomeComponent from './pages/home';
import OverviewComponent from './pages/overview';
import NotFoundComponent from './pages/not-found';
import PurchaseComponent from './pages/purchase';
import SellComponent from './pages/sell';
import { Routes,BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeComponent/>} />
            <Route path="/overview" element={<OverviewComponent/>} />
            <Route path="/purchase" element={<PurchaseComponent/>} />
            <Route path="/sell" element={<SellComponent/>} />
            <Route path="*" element={<NotFoundComponent/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;