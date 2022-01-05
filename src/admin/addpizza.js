import React, { useState, useEffect } from "react";
import {useDispatch , useSelector}  from 'react-redux'  
import { addNewPizza } from "../actions/pizzaAction";
import Error from "../component/Error";
import Loading from '../component/Loading';
import Success from '../component/Success'
export default function addpizza() {
  const [pizzaName, setPizzaNAme] = useState('');
  const [SmallVarient, setSmallVarient] = useState('');
  const [MediumVarient, setMediumVarient] = useState('');
  const [LargeVarient, setLargeVarient] = useState('');
  const [Description, setDescription] = useState('');
  const [Category, setCategory] = useState('');
  const [UploadImage, setUploadImage] = useState('');
  const pizzasState = useSelector(state=>state.addNewPizza)

const { success, error , loading} = pizzasState;

  const dispatch = useDispatch();
  function addPizza(e){
      e.preventDefault();
      const pizza ={
         name: pizzaName,
         image:UploadImage,
         description: Description,
         category: Category,
         prices:{
             small: SmallVarient,
             medium: MediumVarient,
             large: LargeVarient,
         }

         
      }
      console.log(pizza.name);
      dispatch(addNewPizza(pizza))


  }
    return (
      <div className="container  ">
      <div class="row justify-content-center">
        <div className="justify-content-center">
            <h2>Add Pizza</h2>
            <form className="w-75 shadow">
              {loading && <Loading />}
              {error && <Error error="Please Enter valid Details"/>}
              {success && <Success success="Pizza add succesFully"/>}
                <input className="form-control m-2" value={pizzaName} onChange={(e)=>{setPizzaNAme(e.target.value)}}  type="text" placeholder="Pizza Name" />
                <input className="form-control m-2" value={SmallVarient} onChange={(e)=>{setSmallVarient(e.target.value)}}  type="text" placeholder="Small varient Price" />                
                <input className="form-control m-2" value={MediumVarient} onChange={(e)=>{setMediumVarient(e.target.value)}}  type="text" placeholder="Medium varient Price" />
                <input className="form-control m-2" value={LargeVarient} onChange={(e)=>{setLargeVarient(e.target.value)}}  type="text" placeholder="Large varient Price" />
                <input className="form-control m-2 " value={Description} onChange={(e)=>{setDescription(e.target.value)}} type="text" placeholder="Description" />
                <input className="form-control m-2 " value={Category} onChange={(e)=>{setCategory(e.target.value)}} type="text" placeholder="category" />
                <input className="form-control m-2" value={UploadImage} onChange={(e)=>{setUploadImage(e.target.value)}}  type="text" placeholder="Upload Image"/>
                <button className="btn btn-danger m-2 w-50 " onClick={addPizza}>Add Pizza</button>
            </form>
        </div>
        </div>
        </div>
    )
}
