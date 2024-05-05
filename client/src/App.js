import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import './App.css';
import ShopNavBar from './components/UI/ShopNavBar/ShopNavBar';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import StockNavBar from './components/UI/StockNavBar/StockNavBar';

function App() {
  const user = useSelector(state => state.user)
  const navCheck = () => {
    if (user.auth && user.role === 'storekeeper') {
      return <StockNavBar/>
    } else if (user.auth)
      return <ShopNavBar/>
  }

  return (
    <div className="App">
      <BrowserRouter>
        {navCheck()}
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
