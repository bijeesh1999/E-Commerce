import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/products/productApi";
import "./category.css";

function SingleCategory() {
  const navigate=useNavigate();
  const [singlecategory, setSingleCategory] = useState([]);
  const [name, setName] = useState();
  const [sellingPrice,setSellingPrice]=useState();
  const params = useParams();
  const id = params.id;
  const dispatch=useDispatch();

  const products = useSelector((state) => state.product.products);
  console.log(products);

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, [dispatch, products]);

  useEffect(() => {
    let array = [];
    products.map((items) => {
      if (items.categoryId === id) {
        setName(items.categoryName);
        setSellingPrice(items.mrp - items.discount);
        array.push(items);
      }
    })
    console.log(array.length);
    setSingleCategory(array);
  }, [products]);



  return (
    <>
      <h1 className="categoryName">{name}</h1>
      <div className="categoryData">
        {singlecategory?.map((data, index) => (
          <div className="datas" key={index} onClick={()=>navigate(`/product/${data._id}`)}>
            <img
              src={`http://localhost:8086/uploads/${data.images[0]}`}
              alt=""
            />
            <h2>{data.ProductName}</h2>
            <div className="descriptions">
              <h4>{data.Description}</h4>
              <div className="price" style={{ padding: "10px" }}>
                <h4 style={{ textDecoration: "line-through" }}>{data.mrp}</h4>
                <h4>{sellingPrice}</h4>
              </div>
            </div>
            <div className="overlay"></div>
            <span>-{(Math.ceil((data?.discount/data?.mrp)*100))}%</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default SingleCategory;
