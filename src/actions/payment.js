import axios from 'axios'
export const  placeOrder=(token, subTotal) => async (dispatch , getState)=>{
      dispatch({type: 'PLACE_ORDER_REQUEST'})
      const currentUser =  getState().loginReducer.currentUser;
      const cartItem = getState().cartReducer.cartItem
      
      try {
          const response = await axios.post('/placeOrder' ,{token, subTotal, currentUser , cartItem})
          console.log(response)
          dispatch({type: 'PLACE_ORDER_SUCCESS'})
      } catch (error) {
          console.log(error)
          dispatch({type: 'PLACE_ORDER_FAILED'})
          
      }
}