import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch } from "react-redux";
import DeleteModal from "../deleteConfirm";
import { postCategoryData , updateCategory , getCategories} from "../../redux/category/categoryApi";
import "./superAdmin.css"

function CategoryModal(props) {
  const navigate=useNavigate();
  const [form , setForm]=useState(false)

  const [add,setAdd]=useState({
    categoryName:""
  })
  const [button , setButton]=useState(false)
    const dispatch=useDispatch();
    const category=props.categorie;

    const editCategory=(data)=>{
        console.log(data);
        setButton(true)
        setForm(true)
        setAdd(data)
    }

    const addModal=()=>{
      setForm (true)   
    }
  const handleSubmit=(e)=>{
    setAdd({
      ...add,
      [e.target.name]: e.target.value 
    })
  }
  const addCategory=async(e)=>{
    e.preventDefault();
    dispatch(postCategoryData(add))
    setTimeout(() => {
      dispatch(getCategories())
      setForm(false)
      setAdd("")
    }, 200);
    
  }

  const editData = async (e) => {
    e.preventDefault();
    dispatch(updateCategory(add));
    setTimeout(() => {
      dispatch(getCategories())
    }, 200);
    setForm(false)
  };

  const closeForm=async(e)=>{
    setAdd("")
    setForm(false)
  }

  return (
    <div id="categoryModal">
      <div className="addButton">
        <button className="addCategory" onClick={()=>addModal()}>Add</button>
      </div>
        <div id="categoryForm">
        {form ? <form >
        <input type="test" name="categoryName" value={add.categoryName} onChange={handleSubmit} required />
        <div className="categorybuttons">
        {button? <button type="submit" value="edit" className="button" onClick={editData}>Submit</button> :<button type="submit" className="button" value="submit"onClick={addCategory} >submit</button>}
        <button className="button" onClick={closeForm}>cancel</button>
        </div>
        </form> : null}
        </div>
      <table>
      <thead>
    <tr>
      <th>Category</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {category?.map((data , index)=>(    
    <tr key={index}>
      <td>{data.categoryName}</td>
      <td className="categoryAction">
      <DeleteModal id={data._id}/>
      <i className="fa-solid fa-pen-to-square" onClick={()=>editCategory(data)}></i>
      </td>
    </tr>
    ))}
  </tbody>
      </table>
      <div style={{display:"flex", justifyContent:"flex-end" , width:"100%"}}>
      </div>
    </div>
  );
}

export default CategoryModal;
