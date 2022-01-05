import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {cartAction , deleteCart} from '../actions/cartAction'
import Checkout from "../component/Checkout";
import AOS from 'aos'
import 'aos/dist/aos.css'; 

export default function cart() {
  AOS.init()
  const cartState = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const cartItem = cartState.cartItem;
  const subTotal  = cartItem.reduce(( x, item)=> x+item.price , 0)
  return (
    <div className="container">
      <div className="row  " data-aos="fade-down">
        <div className="col-md-8">
          <h1>My Cart</h1>
          {cartItem.map((item) => {
            return (
              <div class="row ">
                <div className="d-inline-block col-md-6 text-left">
                  <h5 style={{fontSize:"18px"}}>{item.name} [{item.varient}]</h5>
                  <h5>
                    {" "}
                    Price : {item.quantity} * {item.prices[0][item.varient]} ={" "}
                    {item.price}
                  </h5>
                  <h5>
                    Quantity :
                    <i
                      class="fa fa-plus text-success h6"
                      aria-hidden="true" 
                     onClick= {()=>{dispatch(cartAction(item , item.quantity+1 , item.varient))}}
                    ></i>{" "}
                    {item.quantity}{" "}
                    <i
                      class="fa fa-minus  h6 text-danger"
                      aria-hidden="true"
                      onClick= {()=>{dispatch(cartAction(item , item.quantity-1 , item.varient))}}
                    ></i>
                  </h5>
               
                </div>
                <div className="d-inline-block col-md-3 ">
                  <img
                    src={item.image}
                    className="rounded mx-auto d-block img-fluid"
                    alt="..."
                    style={{height:"80px" , width:"80px"}}
                   
                  />
                   
                </div>
                <div className="d-inline-block col-md-1">
                  <i class="fa fa-trash text-danger" aria-hidden="true" 
                 onClick={()=>dispatch(deleteCart(item))}  ></i>
                
                </div>
               
              </div>
            );
            
          })}
    
        </div>
        <div className="col-md-4 text-right">
          <h1>SubTotal : {subTotal}/-</h1>
           <Checkout subTotal={subTotal}/>
        </div>
      </div>
    </div>
  );
}
