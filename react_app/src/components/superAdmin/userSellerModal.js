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
      <table>
        <caption>DataTable</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Id</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((data)=>(
          <tr>
            <th>{data.userName}</th>
            <td>{data.emailId}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}


export default UserSeller