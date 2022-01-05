import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser, getalluser } from "../actions/userAction";
import Error from "../component/Error";
import Loading from "../component/Loading";
import Pizza from "../component/Pizza";

export default function userlist() {    
    const dispatch = useDispatch();
  const userState = useSelector((state) => state.getalluserReducer);
  const { users, error, loading } = userState;
  useEffect(() => {
    dispatch(getalluser());
  }, []);
    return (
        <div>
           <h1>User List</h1> 
           {loading && <Loading />}
          {error && <Error error="Something went Wronng" />}
          <table class="table table-bordered table-striped text-left">
            <thead className="thead-dark ">
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
                {users && users.map(item=>{
                    return <tr>
                    <td>{item._id} </td>
                    <td>{item.name}</td>
                    <td>{item.email } </td>
                    <td>{!item.isAdmin ? (<i className="fa fa-trash text-danger" onClick={()=>{dispatch(deleteuser(item._id))}}></i>) :(<h6>Admin</h6>)}</td>
                  </tr>
                })}
              

            </tbody>
          </table>        </div>
    )
}
