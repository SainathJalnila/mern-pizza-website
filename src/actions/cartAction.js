export const cartAction =(item , quantity , varient)=>(dispatch, getState)=>{

    var cartItem = {
        name: item.name,
        _id: item._id,
        quantity:Number(quantity),
        varient:varient,
        prices: item.prices,
        price: item.prices[0][varient] * quantity, 
        image: item.image

    }
     if(cartItem.quantity>10){
         alert("you cannot add more than 10 quantity")
     }
     else{
         if(cartItem.quantity<1){
            dispatch({type:"DELETE_CART" , payload:item})
         }
         else{
        dispatch({type:'ADD_TO_cart' , payload : cartItem})
         }
     }
    
    



    const cartItems = getState().cartReducer.cartItem;
    localStorage.setItem('cartItem' , JSON.stringify(cartItems));

}

export const deleteCart= (item)=>(dispatch, getState)=>{
    
    dispatch({type:"DELETE_CART" , payload:item})
    const cartItems = getState().cartReducer.cartItem;
    localStorage.setItem('cartItem' , JSON.stringify(cartItems));
}

