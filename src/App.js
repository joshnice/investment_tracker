import React, { Component } from 'react';
import HomeComponent from './pages/home';
import OverviewComponent from './pages/overview';
import NotFoundComponent from './pages/not-found';
import PurchaseComponent from './pages/purchase';
import SellComponent from './pages/sell';
import { Routes,BrowserRouter, Route } from "react-router-dom";
import { Pages } from './types/global';
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeComponent/>} />
            <Route path={Pages.OVERVIEW} element={<OverviewComponent/>} />
            <Route path={Pages.PURCHASE} element={<PurchaseComponent/>} />
            <Route path={Pages.SELL} element={<SellComponent/>} />
            <Route path="*" element={<NotFoundComponent/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;