import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from 'js-cookie';
import "./superAdmin.css"




function SuperAdmin(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        if(!Cookies.get('token')){
            navigate("/superAdminLogin")
        }
    },[])

    const logOut= async ()=>{
        Cookies.remove('token');
        // if(!Cookies.get('token')){
        //     navigate("/superAdminLogin")
        // }
        window.location.href = '/superAdminLogin'
    }

    return(
        <>
        <div className="wraper">
        <div id="menuBar">
            <h1>Header</h1>
            <div id="menuBarButtons">
            <button className="menuButton">hello</button>
            <button className="menuButton">hello</button>
            <button className="menuButton">topper</button>
            <button className="menuButton" onClick={()=>logOut()}>log out</button>
            </div>
                
        </div>
            {/* <div className="allDataContainer"> */}
                <div className="dashboard">
                    <div className="allProducts div" onClick={()=>navigate("/allProduct")}>
                        allProducts
                    </div>
                    <div className="allCategories div" onClick={()=>navigate("/allCategory")}>
                        allCategories
                    </div>
                    <div className="allUsers div" onClick={()=>navigate("/allUser")}>
                        allUsers
                    </div>
                    <div className="allSellers div"onClick={()=>navigate("/allSellers")}>
                        allSellers
                    </div>
                    <div className="allSellers div"onClick={()=>navigate("/allOrderList")}>
                        allOrder
                    </div>
                </div>
            {/* </div> */}
        </div>
        </>
    )

}


export default SuperAdmin