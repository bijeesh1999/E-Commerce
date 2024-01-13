import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCategoryById , getCategories , postCategoryData , updateCategory} from "../../redux/category/categoryApi";
import "./superAdmin.css"

function CategoryModal(props) {
  const [add,setAdd]=useState({
    categoryName:""
  })
  const [button , setButton]=useState(false)
    const dispatch=useDispatch();
    const category=props.categorie;

    // console.log(add);

    const deleteCategory=async (id)=>{
        dispatch(deleteCategoryById(id))
        await getCategories()
    }
    const editCategory=(data)=>{
        console.log(data);
        setButton(true)
        setAdd(data)

    }

    const addModal=()=>{
        alert()
    }
  const handleSubmit=(e)=>{
    setAdd({
      ...add,
      [e.target.name]: e.target.value 
    })
  }
  const addCategory=(e)=>{
    e.preventDefault();
    dispatch(postCategoryData(add))
  }

  const editData = (e) => {
    e.preventDefault();
    dispatch(updateCategory(add));
  };

  return (
    <div id="categoryModal">
        <button className="addCategory" onClick={()=>addModal()}>Add
        </button>
        <form >
        <input type="test" name="categoryName" value={add.categoryName} onChange={handleSubmit} />
        {button? <input type="submit" value="edit" onClick={editData}/> :<input type="submit" value="submit"onClick={addCategory} />}
        </form>
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
      <td><i className="fa-solid fa-trash" onClick={()=>deleteCategory(data._id)}></i>
      <i className="fa-solid fa-pen-to-square" onClick={()=>editCategory(data)}></i>
      </td>
    </tr>
    ))}
  </tbody>
      </table>
    </div>
  );
}

export default CategoryModal;
