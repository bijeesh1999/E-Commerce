import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ByProduct(){
    const id=useParams()

const getPayment= async ()=>{
    let Data=await axios.get(`http://localhost:8086/payProduct/${id.id}`)
    console.log(Data.data);
}

useEffect(()=>{
    getPayment()
},[])

    return(
        <div><h1>Welcome to by</h1></div>
    )
}

export default ByProduct;