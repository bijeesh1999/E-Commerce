import React from "react";
import axios from "axios";
import { useSelector } from 'react-redux'
import LoginUser from "./user/userLogin";




function PayButton (props){
    const id=useSelector((state)=>state.user.id);
    let products=props.data;
    let total=props.amount;
    let {...data}={products,id,total}
console.log("hello:",props);
    const handleOrder= async ()=>{
        await axios.post(`http://localhost:8086/payProduct/`,data)
        .then((res)=>{
            console.log(res);
            if(res.data.url){
                console.log(res.data.url);
                window.location.href=res.data.url
            }
        }).catch((err)=>{
            console.log(err);
        })
    }


    return(
        <button className="buy cartButton" onClick={()=>handleOrder()}>place order</button>
    )
}

export default PayButton;