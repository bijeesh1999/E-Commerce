import React, { useEffect, useState } from "react";

function UserSeller(props) {
  const [user,setUser]=useState();
  const [seller,setSeller]=useState()
  const [data,setData]=useState()


  console.log(data);
 useEffect(()=>{
  if(props.users){
    setData(props.users)
  }
  if(props.sellers){
    setData(props.sellers)
  }
 },[props])


  return (
    <>
      <table id="list">
        <caption>DataTable</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Id</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((data , index)=>(
          <tr key={index}>
            <td>{data.userName}</td>
            <td className="email">{data.emailId}</td>
          </tr>
          ))}
        </tbody>
        <button className="close">close</button>
      </table>
    </>
  );
}


export default UserSeller