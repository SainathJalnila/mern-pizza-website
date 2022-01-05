import axios from 'axios'
export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginReducer.currentUser;
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });
  try {
    const response = await axios.post("/getuserorder", {
      userid: currentUser._id,
    });
    console.log(response);
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error });
  }
};
export const getallorder =()=> async dispatch=>{
    dispatch({ type: "GET_USER_ORDERS_REQUEST"});
    try {
        const response = await axios.get('/getallorders')
        console.log(response)
        dispatch({ type: "GET_USER_ORDERS_SUCCESS" , payload: response.data})
    } catch (error) {
        dispatch({ type: "GET_USER_ORDERS_FAILED" , payload: error });
    }

}

export const deliverOrder = (orderid) => async (dispatch) => {
    
  try {
    const response = await axios.post("/deliverOrder", { orderid });
    alert("order successfully delivered")

    const orders = await axios.get("/getallorders");
    dispatch({ type: "GET_ALLORDERS_SUCCESS", payload: orders.data });
    window.location.reload()
  } catch (error) {
      console.log(error)
  }
};