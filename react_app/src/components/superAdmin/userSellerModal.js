import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/userAuth/userApi";
import { getSellers } from "../../redux/sellerAuth/sellerApi";
import { useNavigate } from "react-router-dom";


function UserSeller(props) {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [userOrSeller,setUserOrSeller]=useState();
  const [count , setCount]=useState(1)
  const [key,setKey]=useState()

  // console.log(props);

  const pages=props.totalPage;
  const pageButtons = Array.from({ length: pages }, (_, index) => index + 1);

  useEffect(()=>{
    if(props.data?.user){
      setUserOrSeller(props?.data?.user);
    }else if(props.data?.seller){
      setUserOrSeller(props?.data?.seller);
    }
 },[props])


 useEffect(()=>{
    dispatch(getUsers({page:count,key}))
    dispatch(getSellers({page:count,key}))
    console.log(key);
 },[count,key])

 const searchData=(e)=>{
  setTimeout(() => {
    setKey(e.target.value)
  },1000);
}

console.log(key);


  return (
    <div className="userSellerWraper">
            <input type="search" className="search" name="search"onChange={searchData}/>
      <table id="list">
        <thead>
          <tr>
            <th>siNo</th>
            <th>Name</th>
            <th>Email Id</th>
          </tr>
        </thead>
        <tbody>
          {userOrSeller?.map((data , index)=>(
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.userName}</td>
            <td className="email">{data.emailId}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <div className="pages">
        <button className="prevbtn" onClick={()=>setCount(count-1)}>{"<<"}</button>
        {pageButtons ? pageButtons.map((button, index) => (
           <button className="sinlePage" key={index} onClick={()=>setCount(index+1)}>{button}</button>
        )) : null}
        <button className="nextbtn" onClick={()=>setCount(count+1)}>{">>"}</button>
      </div>
    </div>
  );
}


export default UserSeller