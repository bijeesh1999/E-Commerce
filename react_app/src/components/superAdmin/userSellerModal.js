import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserSeller(props) {
  const navigate=useNavigate()
  const [userOrSeller,setUserOrSeller]=useState();

 useEffect(()=>{
  setUserOrSeller(props.data)
 },[props])


  return (
    <div className="userSellerWraper">
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
        {/* <button className="close" onClick={()=>navigate("/superAdmin")}>close</button> */}
    </div>
  );
}


export default UserSeller