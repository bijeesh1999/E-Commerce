import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getCategories } from "../../redux/category/categoryApi";
import { postProduct } from "../../redux/products/productApi";

function SellerForm({SetNewProduct}) {
  const [formData, setFormData] = useState({
    ProductName: '',
    Quantity: '',
    Description: '',
    category: '',
    fetures: '',
    discount: '',
    mrp: '',
  });
  const [fileImage,setFileImage]=useState([])
    const dispatch=useDispatch();

    console.log(fileImage);
    // file?.map(img=>console.log(img))
    useEffect(()=>{
        dispatch(getCategories())
    },[dispatch])
    const category=useSelector((data)=>data.category.categories);

    const close=()=>{
        SetNewProduct(false)
    }

    const hello = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

  const files = (e) => {
    setFileImage(
      e.target.files
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {ProductName,Quantity,Description,category,fetures,discount,mrp} = formData
    const form=new FormData();
    form.append("ProductName",ProductName)
    form.append("Quantity",Quantity)
    form.append("Description",Description)
    form.append("categoryName",category)
    form.append("Fetures",fetures)
    form.append("discount",discount)
    form.append("mrp",mrp)
    for (let file of fileImage) {
      form.append("images",file);
    }
    
    dispatch(postProduct(form))
  }

  return (
    <form className="sellingForm" onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="name " name="ProductName" placeholder="productName" onChange={hello} />
      <input type="text" name="Quantity" placeholder="Quantity" onChange={hello}/>
      <input type="file" id="files" name="files" multiple required onChange={files}/>
      <textarea type="text" name="Description" placeholder="desc...." onChange={hello}/>
      <select id="categories" name="category" required onChange={hello}>
        {category?.map((category,index)=>(
            <option value={category.categoryName} key={index}>{category.categoryName}</option>
        ))}
      </select>
      <input type="text" name="fetures" placeholder="Fetures" onChange={hello}/>
      <input type="text" name="discount" placeholder="discount" onChange={hello}/>
      <input type="" name="mrp" placeholder="mrp" onChange={hello}/>
      <div className="submitButton">
        <button id="submit">submit</button>
        <button onClick={()=>close()}>close</button>
      </div>
    </form>
  );
}

export default SellerForm;
