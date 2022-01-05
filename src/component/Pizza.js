import React, { useState } from "react";
import  { Modal}  from 'react-bootstrap';
import {useDispatch , useSelector } from 'react-redux';
import { cartAction } from "../actions/cartAction";
import "../css/home.css";
import AOS from 'aos'
import 'aos/dist/aos.css'; 

export default function Pizza({ pizza }) {
  AOS.init()
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const dispatch = useDispatch()  
  function addToCart(){
    dispatch(cartAction(pizza,quantity,varient))

  }
  
  return (
    <div className="shadow-lg p-3 mb-5  w-100 bg-white rounded  " data-aos="zoom-in">
     
      <h1 className="pizza-name text-center">{pizza.name}</h1>
      <img src={pizza.image} className="img-fluid " className="pizza-img"   onClick={handleShow}/>
      <div>
        <div className="var-qan-sec">
          <p className="sec-display-name">varients</p>
          <hr></hr>
          <select
            className="sec-display-drop"
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="var-qan-sec qan-sec-2">
          <p className="sec-display-name">Quantity</p>
          <hr></hr>
          <select
            className="sec-display-drop"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((v, i) => {
              return <option value={v + 1}>{v + 1}</option>;
            })}
          </select>
        </div>
        <div className="bg-light mt-1">
          <h5 className="d-inline-block">Price : {pizza.prices[0][varient] * quantity}</h5>
          <button className="btn btn-danger d-inline-block float-right"  onClick={addToCart}>add to cart </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} className="galleryModal ">
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{textAlign:"center"}}>
        <img src={pizza.image} className="img-fluid modal-img " />
        <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-success"  onClick={handleClose}>Close</button>
         
        </Modal.Footer>
      </Modal>
    </div>
  );
}
