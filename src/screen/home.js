
import  react  , {useState , useEffect } from 'react';
import { useDispatch , useSelector}  from 'react-redux';
import { getAllPizzas } from "../actions/pizzaAction";
import Error from '../component/Error';
import Filter from '../component/Filter';
import Loading from '../component/Loading';
import Pizza from "../component/Pizza";






export default function home() {
const dispatch = useDispatch();
const pizzasState = useSelector(state=>state.getAllPizzaReducer)

const { pizzas , error , loading} = pizzasState;


  useEffect(()=>{
    dispatch(getAllPizzas())
  }, [])
  
  return (  <div className="container">
      <div className="row">
        <Filter/>
              {loading ? (
                 <Loading/>
              ): error ?  (<Error error="something went Wrong"/>):
              
                (pizzas.map((pizza) => {
                  return (   <div className="col-md-4" key={pizza._id}>
                      <Pizza pizza={pizza} />
                    </div>
                  );
                })
              )}       
      </div>
    </div>
  );
}
