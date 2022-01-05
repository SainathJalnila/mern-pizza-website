import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import userlist from "./userlist";
import orderlist from "./orderlist";
import pizzalist from "./pizzalist";
import addpizza from "./addpizza";

import './admincss/style.css';
import editpizza from "./editpizza";
export default function admin() {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginReducer);
  const { currentUser } = loginState;
  if (!currentUser.isAdmin) {
    window.location.href = "/";
  }
  

  return (
    <div className="container  ">
      <div class="row justify-content-center">
      <div className="col-md-10 admin-panel   ">
        <h2>Admin Panel</h2>
        <ul className="bg-primary">
          <li>
            <Link to={"/admin/userlist"}>User List</Link>
          </li>
          <li>
            <Link to={"/admin/pizzalist"}>Pizza List</Link>
          </li>
          <li>
            <Link to={"/admin/orderlist"}>Order List</Link>
          </li>
          <li>
            <Link to={"/admin/addpizza"}>Add New Pizza</Link>
          </li>
        </ul>
        
        <switch>
          <Route exact path="/admin" component={userlist} />
          <Route exact path="/admin/userlist" component={userlist} />
          <Route exact path="/admin/pizzalist" component={pizzalist} />
          <Route exact path="/admin/orderlist" component={orderlist} />
          <Route exact path="/admin/addpizza" component={addpizza} />
          <Route exact path="/admin/editpizza/:pizzaid" component={editpizza} />
        </switch>
      </div>
      </div>
    </div>
  );
}
