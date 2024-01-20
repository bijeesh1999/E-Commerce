import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getMyOrderHistory } from "../../redux/order/orderApi";
import "./myOrderHistory.css"


function MyOrder(){
    const dispatch=useDispatch();
    const id=useSelector((state)=>state.user.id)

    useEffect(()=>{
        dispatch(getMyOrderHistory(id))
    },[id])

    const history=useSelector((state)=>state.order.orderHistory)
    console.log(history);
    return(
        <div className="Wraper">
            <div className="container">
                {history.map((data , index)=>(
                <div className="orderHistory" key={index}>
                    <div className="orderinfo">
                        <h4>orderId : {data._id}</h4>
                    <h4>orderDate : {data.createdAt}</h4>
                    </div>
                    {data?.cartData.map((product , index)=>(
                    <div className="products" key={index}>
                        <div className="img">
                        <img src={`http://localhost:8086/uploads/${product.images[0]}`} />
                        </div>
                        <div className="productdet">
                        <h4>Name : {product.ProductName}</h4>
                        <h5>categori : {product.categoryName}</h5>
                        <div className="id">
                        <h5>Quantity : {product.Quantity}</h5>
                        <h5>ProductId : {product._id}</h5>
                        </div>
                        </div>
                    </div>
                    ))}
                    <h4>Order:{data.status}</h4>
                </div>
                ))}
            </div>
        </div>
    )
}

export default MyOrder;