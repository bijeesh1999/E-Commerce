import React, { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { getAllOrder , getOneOrder } from "../../redux/order/orderApi";




function AllOrder(){
    const [order , setOrder]=useState()
    const [modal , setModal]=useState(false)
    const dispatch=useDispatch();
    const allorder=useSelector((state)=>state.order.allOrder)


    useEffect(()=>{
        dispatch(getAllOrder())
    },[dispatch])

    const getOne=(id)=>{
        dispatch(getOneOrder(id))
        setModal(true)
    }

    const singleOrder=useSelector((state)=>state.order?.singleOrder)
    useEffect(()=>{
        setOrder(singleOrder?.data)
    },[singleOrder])

    console.log(order?.cartData);
    return(

        <div className="orderWraper">
        <table className="orderList">
            <thead>
                <tr>
                    <th>siNo</th>
                    <th>user</th>
                    <th>Order Id</th>
                    <th>status</th>
                    <th >Orders</th>
                </tr>
            </thead>
            <tbody>
                {allorder.map((data , index)=>(
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.userName}</td>
                    <td>{data._id}</td>
                    <td>{data.status}</td>
                    <td className="list" ><i className="fa-solid fa-circle-info" style={{fontSize:"21px"}} onClick={()=>getOne(data._id)}></i></td>
                </tr>
                ))}
            </tbody>
        </table>
        {modal ? <div className="orderOverlay">
        </div> : null }
        {modal ? <div className="orderModal">
            <h4 className="header">Order</h4>
            {order?.cartData?.map((data , index)=>(
                <div className="orderDetails" >
            <div className="orderimg">
                <img src={`http://localhost:8086/uploads/${data.images[0]}`} alt="orderimg"/>
            </div>
            <h4 style={{flex:"1"}}>{data.ProductName}</h4>
            <h5>{data.mrp - data.discount}</h5>
            <h5>{data.Quantity}</h5>
            </div>
           ))}
           <button className="closeOrder" onClick={()=>setModal(false)}><i class="fa-solid fa-xmark"></i></button>
        </div> : null}
        </div>

        
    )


}

export default AllOrder;