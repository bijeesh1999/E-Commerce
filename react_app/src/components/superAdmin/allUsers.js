import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserSeller from "./userSellerModal";
import { getUsers } from "../../redux/userAuth/userApi";



function AllUserList(){
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getUsers())
    },[])

    const users=useSelector((state)=>state.user.allUser)

    return(
        <>
        <UserSeller data={users}/>
        </>
    )


}

export default AllUserList;