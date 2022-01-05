import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePizza, getAllPizzas } from "../actions/pizzaAction";
import Error from "../component/Error";
import Filter from "../component/Filter";
import Loading from "../component/Loading";
import Pizza from "../component/Pizza";
import { BrowserRouter, Link, Route , Routes, Switch }  from 'react-router-dom'
  
export default function pizzalist() {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzaReducer);
  const { pizzas, error, loading } = pizzasState;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <h2>Pizza List</h2>

      <table class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {loading && <Loading />}
          {error && <Error error="Please Enter valid Details" />}
          {pizzas &&
            pizzas.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>
                    Small: {item.prices[0]["small"]}
                    <br />
                    Medium: {item.prices[0]["medium"]}
                    <br />
                    Large: {item.prices[0]["large"]}
                    <br />
                  </td>
                  <td>{item.category}</td>
                  <td>
                  <i class="fas fa-trash-alt text-danger m-2 h4" onClick={()=>{dispatch(deletePizza(item._id))}}></i>
                  <Link to={`/admin/editpizza/${item._id}`}>  <i class="fas fa-pen-square text-primary m-2 h4"></i></Link> 
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
