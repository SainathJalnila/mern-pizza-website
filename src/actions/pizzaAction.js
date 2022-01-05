import axios from "axios";
export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZA_REQUEST" });
  try {
    const response = await axios.get("/getAllPizzas");
    console.log(response);
    dispatch({ type: "GET_PIZZA_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZA_FAILED", payload: error });
  }
};
export const getPizzaById = (pizzaid) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });
  try {
    const response = await axios.post("/getpizzabyid", { pizzaid });
    console.log(response);
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZABYID_FAILED", payload: error });
  }
};
export const filterPizzas = (searchkey, category) => async (dispatch) => {
  var FilterProduct;
  dispatch({ type: "GET_PIZZA_REQUEST" });
  try {
    const response = await axios.get("/getAllPizzas");
    FilterProduct = response.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchkey)
    );
    if (category != "all") {
      FilterProduct = response.data.filter(
        (pizza) => pizza.category.toLowerCase() == category
      );
    }
    console.log(response);
    dispatch({ type: "GET_PIZZA_SUCCESS", payload: FilterProduct });
  } catch (error) {
    dispatch({ type: "GET_PIZZA_FAILED", payload: error });
  }
};

export const addNewPizza = (pizza) => async (dispatch) => {
  var FilterProduct;
  dispatch({ type: "ADD_PIZZA_REQUEST" });
  try {
    const response = await axios.post("/addnewpizza", { pizza });

    console.log(response);
    dispatch({ type: "ADD_PIZZA_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_PIZZA_FAILED", payload: error });
  }
};

export const updatePizza = (editedPizza) => async (dispatch) => {
    var FilterProduct;
    dispatch({ type: "EDIT_PIZZA_REQUEST" });
    try {
      const response = await axios.post("/editedpizza", { editedPizza });
  
      console.log(response);
      dispatch({ type: "EDIT_PIZZA_SUCCESS" });
      window.location.href = "/admin/pizzalist";
    } catch (error) {
      dispatch({ type: "EDIT_PIZZA_FAILED", payload: error });
    }
  };
 export const deletePizza =(pizzaid )=> async dispatch=>{
   try {
   const response =  await axios.post("/deletepizza" , {pizzaid})
   alert("Pizza Deleted successfully")
   window.location.reload();
     console.log(response)
     
   } catch (error) {
    alert("something went wrong");
   }

 }