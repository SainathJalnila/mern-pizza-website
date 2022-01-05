import React from "react";
import { useState, useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { userLogin } from "../actions/userAction";
import Error from "../component/Error";
import Loading from "../component/Loading";




export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const dispatch = useDispatch();
const loginState = useSelector(state=>state.loginReducer);
const  {loading , error} = loginState;

useEffect(() => {
  if(localStorage.getItem('currentUser'))
{
    window.location.href='/'
  }
})
  function login() {
    const user={
      email,
      password
    }
    console.log(user);
   dispatch(userLogin(user))
    
  }

  return (
    <div>
      <div class="container ">
        <div class="row justify-content-center">
          <div class="col-md-6 shadow-lg p-3 mb-1 bg-white rounded">
            <div className="text-left">
              <h2 className="text-center">login</h2>
               {loading && <Loading/>}
               {error && <Error error="invalid creditional"/>}
              <input
                type="text"
                placeholder="Enter Your email"
                className="form-control shadow-lg p-3 mb-1 bg-white rounded "
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                required
              />
              <input
                type="text"
                placeholder="Enter Your password"
                className="form-control shadow-lg p-3 mb-1 bg-white rounded "
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                required
              />
             
              <button onClick={login} className="btn btn-success mb-3">Login</button>
              <br></br>
              <a href="/register" className="text-dark m-2">Click Here to Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
