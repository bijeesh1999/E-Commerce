import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./byProductStatus.css"

function ByProduct(){
    const navigate=useNavigate();
    const [success,setSuccess]=useState(false)
    const id=useParams()

const getPayment= async ()=>{
    let Data=await axios.get(`http://localhost:8086/payProduct/${id.id}`)
    console.log(Data.data);
    if(Data.data === "complete"){
        setSuccess(true)
    }
}

useEffect(()=>{
    getPayment()
},[])

    return(
        <div id="patentWraper">
        {success ? <div className="wrapper">
             <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                 <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                  <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
             </svg>
             <h3>Order Successfully</h3>
            <button className="sucessOk" onClick={()=>navigate(`/OrderSummary/${id.id}`)}>ok</button>
        </div>: null}
        </div>
    )
}

export default ByProduct;