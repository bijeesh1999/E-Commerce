import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import easyinvoice from "easyinvoice";
import { getAllOrder , getOneOrder } from "../../redux/order/orderApi";
import "./orderSummary.css";




function OrderSummary(){
    const [orderData , setOrderData]=useState()
    const [details,setDetails]=useState()
    const dispatch=useDispatch();
    const {id}=useParams();
    console.log(id);

    useEffect(()=>{
        dispatch(getOneOrder(id))
    },[])
    let oneOrder=useSelector((state)=>state.order.singleOrder)

    useEffect(()=>{
        setOrderData(oneOrder.data?.cartData);
        setDetails(oneOrder?.data);
    },[oneOrder])
    console.log(oneOrder.data);


    // ==================================================================

    const products=[];

    details?.cartData.map((data)=>{
        products.push({
            quantity: `${data.Quantity}`,
            description: `${data.categoryName}`,
            price: `${data.mrp - data.discount}`,
          });
    })


    const downloadInvoice = async (booking) => {

        console.log(booking);
        const data = {
          documentTitle: "INVOICE", //Defaults to INVOICE
          currency: "INR",
          taxNotation: "vat", //or gst
          marginTop: 25,
          marginRight: 25,
          marginLeft: 25,
          marginBottom: 25,
          logo: "link to show on your invoice",
          sender: {
            company: "amazone",
            address: "Stack up",
            zip: "10011",
            city: "TVM",
            country: "INDIA",
          },
          client: {
            company: `${booking?.userName}`,
            address: `${booking?.billingAddress.line1}`,
            zip: `${booking.billingAddress.postal_code}`,
            city: `Check In: ${new Date(booking.createdAt).toLocaleString(
              "en-US"
            )}`,
          },
          invoiceNumber: `${booking._id}`,
          invoiceDate: `${new Date(Date.now()).toLocaleString("en-US")}`,
            products,
          bottomNotice:
            "add message",
        };
      
        const result = await easyinvoice.createInvoice(data);
        easyinvoice.download(`invoice_${booking?._id}.pdf`, result.pdf);
      };

    // ======================================================================




    return(
        <>
        <div id="wraper">
            <div id="container">
            <h2>OrderSummary</h2>
            {orderData?.map((data , index)=>(
                <div className="products" key={index}>
                    <div className="img">
                        <img src={`http://localhost:8086/uploads/${data.images[0]}`} />
                    </div>
                    <div className="details">
                        <h3 style={{textAlign:"center"}}>{data.ProductName}</h3>
                        <h4>{data.Description}</h4>
                        <h3>{data.categoryName}</h3>
                        <div className="total">
                            <h3 style={{textAlign:"end"}}>Amount : {data.mrp - data.discount}</h3>
                        </div>
                    </div>
                </div>
            ))}

                <div id="userDetails">
                    <div className="order">
                    <h3>{details?.userName}</h3>
                    <h3 className="status">{details?.status}</h3>
                    </div>
                    <div className="address">
                        <div className="shipping">
                            <h3>Shipping:</h3>
                            <div className="Details">
                            <h3>{details?.shippingAddress?.line1}</h3>
                            <h3>{details?.shippingAddress?.line2}</h3>
                            <h3>{details?.shippingAddress?.state}</h3>
                            <h4>{details?.shippingAddress?.postal_code}</h4>
                            </div>
                        </div>
                        <div className="billing">
                            <h3>Billing:</h3>
                            <div className="Details">
                            <h3>{details?.billingAddress?.line1}</h3>
                            <h3>{details?.billingAddress?.line2}</h3>
                            <h3>{details?.billingAddress?.state}</h3>
                            <h4>{details?.billingAddress?.postal_code}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="total">
                        <h3>Order Date : {details?.createdAt?.split("T")[0]}</h3>
                        <h3>Total Amount : {details?.totalAmount}</h3>
                    </div>
                </div>
            <footer>
                <button onClick={()=>downloadInvoice(details)}>Download</button>
            </footer>
            </div>

        </div>
        </>
    )
}

export default OrderSummary;