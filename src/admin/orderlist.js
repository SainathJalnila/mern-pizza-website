import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getallorder } from "../actions/OrderAction";
import Error from "../component/Error";
import Loading from "../component/Loading";
import Pizza from "../component/Pizza";


export default function orderlist() {
  const dispatch = useDispatch();
  const getorderstate = useSelector((state) => state.getallorders);
  const { loading, error, order } = getorderstate;
  useEffect(() => {
    dispatch(getallorder());
  }, []);
  return (
    <div>
      <h2>Order List</h2>
      {loading && <Loading />}
      {error && <Error error="Please Enter valid Details" />}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">OrderId</th>
            <th scope="col">Email</th>
            <th scope="col">UserId</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {order &&
            order.map((item) => {
              return (
                <tr>
                  <td>{item._id}</td>
                  <td>{item.email}</td>
                  <td>{item.userid}</td>
                  <td>{item.orderAmount}</td>
                  <td>{item.createdAt}</td>
                  <td>
                    {item.isDelivered ? (
                      <h5>Delivered</h5>
                    ) : (
                      <button className="btn btn-primary" onClick={()=>{dispatch(deliverOrder(item._id))}}>Deliver</button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
