import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/OrderAction";
import Loading from "../component/Loading";
import Error from "../component/Error";
import Success from "../component/Success";

export default function Order() {
  const dispatch = useDispatch();
  const OrderState = useSelector((state) => state.userOrderReducer);
  const { orders, error, loading } = OrderState;
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  console.log(orders);
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Please Enter valid Details" />}
      {orders &&
        orders.map((order) => {
          return (
            <div className="col-md-12   justify-content-center  ">
              <div className="container shadow-lg p-3 mb-5  rounded">
                {order.orderItem.map((item) => {
                  return (
                    <div className="container border-2 ">
                    <div className="row text-left ">
                      <div className="col-md-3 text-left">
                          <h4>Item</h4>
                          <hr/>
                        <h6>
                          {item.name}[{item.varient}] * {item.quantity} ={" "}
                          {item.price}
                        </h6>
                      </div>
                      <div className="col-md-3 text-left">
                      <h4>Address</h4>
                      <hr/>
                        <h6>
                          {order.shippingAddress.street}{' '}
                          {order.shippingAddress.city} <br></br>
                          {order.shippingAddress.zip}{' '}
                          {order.shippingAddress.country}
                        </h6>
                      </div>
                      <div className="col-md-3 ">
                      <h4>Order Info</h4>
                      <hr/>
                        <h6>
                          {order.orderAmount} {order.createdAt.substring(0, 10)}{" "}
                        </h6>
                        <h6>
                          {order.createdAt.substring(0, 10)}{" "}
                        </h6>
                        <h6>
                          {order.transactionId}{" "}
                        </h6>
                      </div>
                    </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
}
