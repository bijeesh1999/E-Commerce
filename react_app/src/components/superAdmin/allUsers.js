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

    // console.log(users);
    const data=users?.Users?.map((data)=>data);
    const page=users.totalPage;
    // console.log("data:",data);
    // console.log("page:",page);

    return(
        <>
        <UserSeller data={data&&data[0]} totalPage={page}/>
        </>
    )


}

export default AllUserList;