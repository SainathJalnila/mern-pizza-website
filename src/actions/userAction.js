import React from 'react';
import axios from 'axios'

export const  userAction=(user)=> async dispatch=> {
    dispatch({type: "USER_REGISTER_REQUEST"});
   try {
       const response = await axios.post('/user/register', user)
       dispatch({type: "USER_REGISTER_SUCCESS"})
   } catch (error) {
    dispatch({type: "USER_REGISTER_FAILED" , payload : error})
   }
}

export const userLogin=(user) =>  async dispatch=>{
    dispatch({type: "USER_LOGIN_REQUEST"})
    try {
        const response = await axios.post('/user/login', user);
        console.log(response);
        dispatch({type: "USER_LOGIN_SUCCESS" , payload: response.data})
        localStorage.setItem('currentUser' , JSON.stringify(response.data))
        window.location.href="/"
        
    } catch (error) {
        dispatch({type: "USER_LOGIN_FAILED" , payload: error})
    }

}
export const logoutAction=()=>dispatch=>{
    localStorage.removeItem("currentUser");
    window.location.href='/login'
}

export const getalluser = () => async (dispatch) => {
    dispatch({ type: "GET_USERDATA_REQUEST" });
    try {
      const response = await axios.get("/user/getalluser");
      console.log(response);
      dispatch({ type: "GET_USERDATA_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_USERDATA_FAILED", payload: error });
    }
  };

  export const deleteuser = (userid)=> async dispatch=>{
      try {
        const response = await axios.post('/user/deleteuser' , {userid});
        alert("user Deleted SuccessFully")
        window.location.reload()

      } catch (error) {
          alert("Something went wrong")
          
      }
  }