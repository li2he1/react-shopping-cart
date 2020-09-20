import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route  exact path="/react-shopping-cart/" component={Home} />
          <Route path="/react-shopping-cart/cart" component={Cart} />
        </Switch>
        </BrowserRouter>
      </div>
      
    </Provider>
  );
}

export default App;
