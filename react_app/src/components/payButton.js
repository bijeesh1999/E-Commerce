import React from "react";
import axios from "axios";



function PayButton(props){
const data=props.data;
// console.log("hello:",data);
    const handleOrder= ()=>{
         axios.post(`http://localhost:8086/payment`,data)
        .then((res)=>{
            console.log(res.data);
            if(res.data.session.url){
                console.log(res.data.url);
                window.location.href=res.data.session.url
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