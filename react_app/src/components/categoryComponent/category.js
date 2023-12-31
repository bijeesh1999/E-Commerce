import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getCategories } from "../../redux/category/categoryApi";
import { useNavigate } from "react-router-dom";
import "./category.css";

function Categorys() {
const navigate=useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const categories = useSelector((state) => state.category.categories);

  // console.log(categories);

  return (
    <React.Fragment>
      <div className="categories">
        {categories?.map((data,index) => (
          <button className="category"key={index} onClick={()=>navigate(`/singleCategory/${data._id}`)}>{data.categoryName}</button>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Categorys;
