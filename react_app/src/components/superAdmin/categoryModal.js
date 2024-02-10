import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import DeleteModal from "../deleteConfirm";
import {getFilterCategory, postCategoryData,updateCategory}from "../../redux/category/categoryApi";
import "./superAdmin.css";

function CategoryModal(props) {
  const [count,setCount]=useState(1)
  const [key , setKey]=useState("")
  const filterCategory=props?.data;
  const pageButtons = Array.from({ length: props.totalPage }, (_, index) => index + 1);
  // console.log(props);

  const navigate = useNavigate();
  const [form, setForm] = useState(false);

  const [add, setAdd] = useState({
    categoryName: "",
  });
  const [button, setButton] = useState(false);
  const dispatch = useDispatch();

  const editCategory = (data) => {
    console.log(data);
    setButton(true);
    setForm(true);
    setAdd(data);
  };

  const addModal = () => {
    setForm(true);
  };
  const handleSubmit = (e) => {
    setAdd({
      ...add,
      [e.target.name]: e.target.value,
    });
  };
  const addCategory = async (e) => {
    e.preventDefault();
    dispatch(postCategoryData(add));
    setTimeout(() => {
      dispatch(getFilterCategory());
      setForm(false);
      setAdd("");
    }, 200);
  };

  const editData = async (e) => {
    e.preventDefault();
    dispatch(updateCategory(add));
    setTimeout(() => {
      dispatch(getFilterCategory());
    }, 200);
    setForm(false);
  };

  const closeForm = async (e) => {
    setAdd("");
    setForm(false);
  };

  const searchData=(e)=>{
    setTimeout(() => {
      setKey(e.target.value)
    }, 1000);
  }

  useEffect(()=>{
    if(count){
      dispatch(getFilterCategory({page:count,key}))
    }else if(key){
      dispatch(getFilterCategory({key}))
    }
  },[count,key])

  console.log("search",key);
  console.log(count);

  return (
    <div id="categoryModal">
      <div className="addButton">
        <input type="search" className="search" name="search" onChange={searchData}/>
        <i className="fa-solid fa-magnifying-glass"></i>
        <button className="addCategory" onClick={() => addModal()}>
          Add
        </button>
      </div>
      <div id="categoryForm">
        {form ? (
          <form>
            <input
              type="test"
              name="categoryName"
              value={add.categoryName}
              onChange={handleSubmit}
              required
            />
            <div className="categorybuttons">
              {button ? (
                <button
                  type="submit"
                  value="edit"
                  className="button"
                  onClick={editData}
                >
                  Submit
                </button>
              ) : (
                <button
                  type="submit"
                  className="button"
                  value="submit"
                  onClick={addCategory}
                >
                  submit
                </button>
              )}
              <button className="button" onClick={closeForm}>
                cancel
              </button>
            </div>
          </form>
        ) : null}
      </div>
      <table className="categoryTable">
        <thead>
          <tr>
            <th>no</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterCategory?.map((data, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{data?.categoryName}</td>
              <td className="categoryAction">
                <DeleteModal id={data?._id} />
                <i
                  className="fa-solid fa-pen-to-square"
                  onClick={() => editCategory(data)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}></div>
      <div className="pages">
        <button className="prevbtn" onClick={()=>setCount(count-1)}>{"<<"}</button>
        {pageButtons ? pageButtons.map((button, index) => (
           <button className="sinlePage" key={index} onClick={()=>setCount(index+1)}>{button}</button>
        )) : null}
        <button className="nextbtn" onClick={()=>setCount(count+1)}>{">>"}</button>
      </div>
    </div>
  );
}

export default CategoryModal;
