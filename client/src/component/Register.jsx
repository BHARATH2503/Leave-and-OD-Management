import React from "react";
import { useUserAuth } from "./context/UserAuthContext";
import Registerform from "./Registerform";

export const Register = () => {
  const { user } = useUserAuth();

  
  return (
    <>
      <div className="p-4 box mt-2 ">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div>
        <Registerform/>
       
      </div>
         
    </>
  );
};

export default Register;