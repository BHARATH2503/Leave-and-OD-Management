import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import Registerform from "./Registerform";
import '../css/Registerform.css';

function Register() 
{
  const { user } = useUserAuth();

  
  return (
    <>
      <div className="mt-2">
       <h5 >
        {user && user.email}</h5 >
        <Registerform/>
       
      </div>
         
    </>
  );
};

export default Register;