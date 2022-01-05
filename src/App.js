import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Home from './screen/home';
import cart from './screen/cart';
import login from './screen/login';
import register from './screen/register';



import { BrowserRouter, Link, Route , Routes, Switch }  from 'react-router-dom'
import Order from './screen/Order';
import admin from './admin/admin';



function App() {
  return (
    <div className="App">
    <Navbar/>    
    <BrowserRouter>            
            <Route exact path="/" component={Home} />   
            <Route path="/cart" component={cart}/>
            <Route path="/login" component={login}/>
            <Route path="/register" component={register}/>
            <Route path="/orders" component={Order}/>
            <Route path="/admin" component={admin}/>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
