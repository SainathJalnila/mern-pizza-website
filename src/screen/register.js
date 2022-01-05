import React, { useState, useEffect } from "react";
import {useDispatch , useSelector}  from 'react-redux'
import { userAction } from "../actions/userAction";
import {userReducer} from '../reducers/userReducer';
import Loading from '../component/Loading';
import Error from '../component/Error';
import Success from '../component/Success'

export default function register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const dispatch = useDispatch();
  const userState = useSelector(state=>state.userReducer)
  const {loading , error , success} = userState;

  function register() {
    if (password != cpassword) {
      alert("Please Match the Password and Confirm Password");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user)
    dispatch(userAction(user)) 
   }
  }

  return (
    <div>
      <div class="container ">
        <div class="row justify-content-center">
          <div class="col-md-6 shadow-lg p-3 mb-1 bg-white rounded">
            <div className="text-left">
              <h2 className="text-center">Register</h2>
              {loading && <Loading />}
              {error && <Error error="Please Enter valid Details"/>}
              {success && <Success success="user register Successfully"/>}
              <input
                type="text"
                placeholder="Enter Your name"
                className="form-control shadow-lg p-3 mb-1 bg-white rounded "
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                required
              />
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
              <input
                type="text"
                placeholder="Enter Your confirm password"
                className="form-control shadow-lg p-3 mb-1 bg-white rounded"
                value={cpassword}
                onChange={(e)=>{setCpassword(e.target.value)}}
                required
              />
              <button onClick={register} className="btn btn-success mb-3">Register</button>
              <br/>
              <a href="/login" className="text-dark ">Click Here to Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
