import React from "react";
import logo2 from "../images/logo-2.jpg";
import "../css/Home.css";
function Home() {
    return (
        <div>
            <br></br>
            <img src={logo2} alt="photokec" width="55%" height="500em"/>
            <div className="centered cont">
            <pre>
            <h2>
                    LEAVE
                    <br></br>AND
                    <br></br>ON DUTY
                    <br></br>MANAGEMENT 
                    <br></br>SYSTEM
                </h2>
            </pre>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <marquee><h3 style={{fontWeight:"600"}}>Hello ! welcome to Leave and On Duty Management System . If you want to see Leave and OD Details click on View . To enter Leave and OD details click on Entry . It is only applicable for Faculty .</h3></marquee>
        </div>
        
    )
}
export default Home;