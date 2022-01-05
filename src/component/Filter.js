import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../actions/pizzaAction";


export default function Filter() {
  const [searchkey, setSearchkey] = useState(" ");
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch()

  return (
    <div>
      <div className="row shadow-lg p-3 mb-5  w-100 bg-white rounded justify-content-center">
        <div className="col-md-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="search "
            className="w-100 form-control"
            value={searchkey}
            onChange={(e)=>{setSearchkey(e.target.value)}}
            
          />
        </div>
        <div className="col-md-3">
          <select name="" id="" className="w-100 h-100" value={category}
            onChange={(e)=>{setCategory(e.target.value)}}>
            <option value="all">ALL</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non Veg</option>
          </select>
        </div>
        <div className="col-md-3">
          <button type="button" className="btn btn-danger w-100" onClick={()=>{dispatch(filterPizzas(searchkey, category))}}>
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
