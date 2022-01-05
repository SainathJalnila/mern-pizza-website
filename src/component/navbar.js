import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/userAction";


export default function navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginReducer);
  const { currentUser } = userState;
   const dispatch= useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-light shadow-lg p-3 mb-5 bg-white rounded ">
        <div className="container-fluid  ">
          <a className="navbar-brand  " href="/">
            ZomatoClone
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent "
          >
            <ul className="navbar-nav ml-auto  ">
              {currentUser ? (
                <li className="nav-item  ">
                  <a
                    className="nav-link active  "
                    aria-current="page"
                    href="/login"
                  >
                  
                    <div class="dropdown text-dark">
                      <a
                        className=" dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {currentUser.name}
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="/orders">
                         Order Details
                        </a>
                        <a className="dropdown-item" href="#" onClick={dispatch(logoutAction)}>
                        <li>logout</li>
                        </a>
                      
                      </div>
                    </div>
                  </a>
                </li>
              ) : (
                <li className="nav-item  ">
                  <a
                    className="nav-link active  "
                    aria-current="page"
                    href="/login"
                  >
                    Login
                  </a>
                </li>
              )}

              <li className="nav-item  ">
                <a
                  className="nav-link active  "
                  aria-current="page"
                  href="/cart"
                >
                  Cart {cartState.cartItem.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
