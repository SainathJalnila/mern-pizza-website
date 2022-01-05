import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePizza, getPizzaById } from "../actions/pizzaAction";
import Error from "../component/Error";
import Loading from "../component/Loading";
import Success from "../component/Success";


export default function editpizza({ match }) {
  const [pizzaName, setPizzaNAme] = useState("");
  const [SmallVarient, setSmallVarient] = useState("");
  const [MediumVarient, setMediumVarient] = useState("");
  const [LargeVarient, setLargeVarient] = useState("");
  const [Description, setDescription] = useState("");
  const [Category, setCategory] = useState("");
  const [UploadImage, setUploadImage] = useState("");
  function addPizza(e) {
    e.preventDefault();
    const editedPizza = {
      _id:match.params.pizzaid,
      name: pizzaName,
      image: UploadImage,
      description: Description,
      category: Category,
      prices: {
        small: SmallVarient,
        medium: MediumVarient,
        large: LargeVarient,
      },
    };
    
    dispatch(updatePizza(editedPizza));
  }
  const getPizzaByID = useSelector((state) => state.getPizzaById);
  const { pizza, error, loading } = getPizzaByID;
  const editPizzaState = useSelector((state) => state.editedPizzaReducer);
  const {editloading , editsuccess , editerror} = editPizzaState;
console.log(pizza)
  const dispatch = useDispatch();
  useEffect(() => {
      if(pizza){
          if(pizza._id===match.params.pizzaid){
            setPizzaNAme(pizza.name)
            setSmallVarient(pizza.prices[0]['small'])
            setMediumVarient(pizza.prices[0]['medium'])
            setLargeVarient(pizza.prices[0]['large'])
            setDescription(pizza.description)
            setCategory(pizza.category)
            setUploadImage(pizza.image)
          }else{
            dispatch(getPizzaById(match.params.pizzaid));
          }
        }else{
          dispatch(getPizzaById(match.params.pizzaid));
        }
  }, [pizza , dispatch]);
  return (
    <div>
      <h2>Edit pizza</h2>
      <h1>{match.params.pizzaid}</h1>
      
      <form className="w-75 shadow">
        {loading && <Loading />}
        {error && <Error error="Please Enter valid Details" />}
        {editsuccess && <Success success="Pizza Updated successfully"/>}

        <input
          className="form-control m-2"
          value={pizzaName}
          onChange={(e) => {
            setPizzaNAme(e.target.value);
          }}
          type="text"
          placeholder="Pizza Name"
        />
        <input
          className="form-control m-2"
          value={SmallVarient}
          onChange={(e) => {
            setSmallVarient(e.target.value);
          }}
          type="text"
          placeholder="Small varient Price"
        />
        <input
          className="form-control m-2"
          value={MediumVarient}
          onChange={(e) => {
            setMediumVarient(e.target.value);
          }}
          type="text"
          placeholder="Medium varient Price"
        />
        <input
          className="form-control m-2"
          value={LargeVarient}
          onChange={(e) => {
            setLargeVarient(e.target.value);
          }}
          type="text"
          placeholder="Large varient Price"
        />
        <input
          className="form-control m-2 "
          value={Description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="Description"
        />
        <input
          className="form-control m-2 "
          value={Category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          type="text"
          placeholder="category"
        />
        <input
          className="form-control m-2"
          value={UploadImage}
          onChange={(e) => {
            setUploadImage(e.target.value);
          }}
          type="text"
          placeholder="Upload Image"
        />
        <button className="btn btn-danger m-2 w-50 " onClick={addPizza}>
          Edit  Pizza
        </button>
      </form>
    </div>
  );
}
