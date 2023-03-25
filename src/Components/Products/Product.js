import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function Product() {
  const [login, setLogin] = useState(
    sessionStorage.getItem("token") ? true : false
  );
  const [userDetails, setUserDetails] = useState(
    sessionStorage.getItem("userDetails") ? true : false
  );

  if(!login){
    return <Navigate to="/login" />
  }
  return (
    <div>
      <h2>products</h2>
    </div>
  )
}
