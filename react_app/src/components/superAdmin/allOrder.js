import React, { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { getAllOrder , getOneOrder } from "../../redux/order/orderApi";




function AllOrder(){
    const [order , setOrder]=useState()
    const [modal , setModal]=useState(false)
    const [count,setCount]=useState(1)
    const [key,setKey]=useState()
    const dispatch=useDispatch();
    const allorder=useSelector((state)=>state.order.allOrder)
    const Order=allorder?.allOrder?.map((data)=>data?.order);
    const filter=Order?Order[0].map((data)=>data):null;
    const pageButtons = Array.from({ length: allorder.totalPage }, (_, index) => index + 1);

    // console.log(count);


    useEffect(()=>{
        dispatch(getAllOrder({page:count,key}))
    },[dispatch,count,key])

    const getOne=(id)=>{
        dispatch(getOneOrder(id))
        setModal(true)
    }

    const singleOrder=useSelector((state)=>state.order?.singleOrder)
    useEffect(()=>{
        setOrder(singleOrder?.data)
    },[singleOrder,key])

    const handleSearch=(e)=>{
        setTimeout(() => {
            setKey(e.target.value) 
        }, 1000);
    }

    console.log(key);
    return(
        <>
        <input type="search"name="search"className="search"  onChange={handleSearch}/>
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
                {filter?.map((data , index)=>(
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.userName}</td>
                    <td>{data.orderId}</td>
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
        <div className="pages">
        <button className="prevbtn" onClick={()=>setCount(count-1)}>{"<<"}</button>
        {pageButtons ? pageButtons.map((button, index) => (
           <button className="sinlePage" key={index} onClick={()=>setCount(index+1)}>{button}</button>
        )) : null}
        <button className="nextbtn" onClick={()=>setCount(count+1)}>{">>"}</button>
      </div>
        </div>

        </>
    )


}

export default AllOrder;