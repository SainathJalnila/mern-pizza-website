export const cartReducer=(state={cartItem:[]}, action)=>{
    switch (action.type) {

       
        case "ADD_TO_cart":  
        const itemExits = state.cartItem.find(item=> item._id===  action.payload._id)   ;
        if(itemExits){
            return    {
                ...state,
                cartItem : state.cartItem.map(item => item._id=== action.payload._id? action.payload: item)

            }
        }else{
        
        return{
           ...state,
           cartItem:[...state.cartItem , action.payload],
           
        } 
    } 
    case 'DELETE_CART': return{
        ...state,
        cartItem: state.cartItem.filter(item=> item._id !==action.payload._id)
    }


   
        default: return state           
    
    }
    
}