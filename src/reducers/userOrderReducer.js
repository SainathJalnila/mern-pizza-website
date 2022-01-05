export const userOrderReducer =(state={orders:[]}, action)=>{
    switch(action.type){
            case 'GET_USER_ORDERS_REQUEST': return{
                loading: true, 
                ...state
            }
            case 'GET_USER_ORDERS_SUCCESS': return {
                loading: false,
                orders: action.payload,
                success:true
            }
            case 'GET_USER_ORDERS_FAILED': return{
                error : action.payload,
                loading: false
            }
          
            default: return state
    }
}
export const getallorders =(state={order:[]}, action)=>{
    switch (action.type) {
        case "GET_USER_ORDERS_REQUEST": return{
            loading:true
        }
        case "GET_USER_ORDERS_SUCCESS": return{
            loading:false,
            order:action.payload,
            success:true,
            
        } 
        case "GET_USER_ORDERS_FAILED": return{
            loading:false,
            error: action.payload
        } 
           
    
        default: return state
           
    }
}