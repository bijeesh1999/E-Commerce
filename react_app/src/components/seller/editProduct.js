import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { editProduct, getProductById , getProducts} from "../../redux/products/productApi";
import { getCategories } from "../../redux/category/categoryApi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./editProduct.css"

function EditProduct() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const id = useParams();
  const [prevImg , setPrevImg]=useState([0])
  const [product, setProduct] = useState({
    ProductName: "",
    Quantity: "",
    Description: "",
    categoryName: "",
    Fetures: "",
    discount: "",
    mrp: "",
  });
  const [fileImage,setFileImage]=useState([])
  const [previmg , setPrevimg]=useState([])



// console.log("editId:",id);
//   console.log(product);
  

  // const fileArray = Array.from(fileImage);
  //   const imageUrls = fileArray.map(file => URL.createObjectURL(file));

    // useEffect(()=>{
    //   setPrevimg("")
    // },[fileImage])


  useEffect(() => {
    dispatch(getProductById(id.id));
    dispatch(getCategories());
  }, [id]);

  const data = useSelector((state) => state.product?.singleProduct);
  const categorys = useSelector((state) => state.category.categories);
  // console.log(data);
  useEffect(() => {
    setProduct(data);
    setPrevimg(data.images)
  }, [data]);


  

  // console.log(product);

  const editing = (e) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
    }));
  };

  const newFiles=(e)=>{
    setFileImage(
      e.target.files
      );

  }

  const submitEditForm=async (e)=>{
    e.preventDefault();
    const formData=new FormData();

    formData.append("ProductName",product.ProductName)
    formData.append("Quantity",product.Quantity)
    formData.append("Description",product.Description)
    formData.append("categoryName",product.categoryName)
    formData.append("Fetures",product.Fetures)
    formData.append("discount",product.discount)
    formData.append("mrp",product.mrp)
    for (let data of fileImage) {
      formData.append("images",data)
    }
    dispatch(editProduct({id:id.id,formData}))

    setTimeout(() => {
       dispatch(getProducts())
       navigate("/adminSelling")
    }, 200);
  }
  return (
    <div className="editWraper">
      <div className="editContainer">
        <div className="productPrevew">
          <div className="productImg">
            <div className="allimg">
              {previmg?.map((img , index)=>(
             <img src={`http://localhost:8086/uploads/${img}`||img} className="allimgs" key={index} onMouseOver={()=>setPrevImg(index)}/>
              ))}
            </div>
            <div className="mainimg">
            {Array.isArray(product.images) && product.images.length > 0 && (
            <img src={`http://localhost:8086/uploads/${previmg[prevImg]}`} className="singleimg" />
            )}

            </div>
          </div>
          <div className="aboutProduct">
            <h3 className="productName">Name : {product.ProductName}</h3>
            <h5 className="description">Desc.. : {product.Description}</h5>
            <h4 className="conpany">Conpany : {product.categoryName}</h4>
            <div className="priceDetails">
              <h4 className="mrp">MRP : {product.mrp}</h4>
              <h4 className="discount">Discount : {product.discount}</h4>
            </div>
          </div>
        </div>
        <div className="productEditForm">
          <form className="editForm" encType="multipart/form-data" onSubmit={submitEditForm}>
           <div className="inputContainer">
           <label for="productName">ProductName</label>
            <input
              type="name "
              name="ProductName"
              placeholder="productName"
              value={product?.ProductName}
              onChange={editing}
            />
           </div>
           <div className="inputContainer">
            <label for="Quantity">Quantity</label>
            <input
              type="text"
              name="Quantity"
              placeholder="Quantity"
              value={product?.Quantity}
              onChange={editing}
            />
           </div>
           <div className="inputContainer">
            <label for="files">Files</label>
            <input
              type="file"
              id="files"
              name="files"
              multiple
              onChange={newFiles}
            />
           </div>
           <div className="inputContainer">
            <label for="Description">Description</label>
            <textarea
              type="text"
              name="Description"
              placeholder="desc...."
              value={product?.Description}
              onChange={editing}
            />
           </div>
           <div className="inputContainer">
            <select id="categories" name="categoryName" required onChange={editing}>
              {categorys?.map((category, index) => (
                <option
                  key={index}
                  selected={ product?.categoryName === category.categoryName}
                >
                  {category.categoryName}
                </option>
              ))}
            </select>
           </div>
           <div className="inputContainer">
            <label for="Fetures">Fetures</label>
            <input
              type="text"
              name="Fetures"
              placeholder="Fetures"
              value={product?.Fetures}
              onChange={editing}
            />
           </div>
           <div className="inputContainer">
            <label for="discount">discount</label>
            <input
              type="text"
              name="discount"
              placeholder="discount"
              value={product?.discount}
              onChange={editing}
            />
           </div>
           <div className="inputContainer">
            <label for="mrp">mrp</label>
            <input
              type="text"
              name="mrp"
              placeholder="mrp"
              value={product.mrp}
              onChange={editing}
            />
           </div>
            <div className="buttons">
            <input type="submit" className="button" />
              <button onClick={''} className="button">close</button> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
