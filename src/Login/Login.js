import React,{useState} from "react";
import logo from "../assest/images/Logo.png";
import googlepic from "../assest/images/Wrapper.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";


const Login  = () =>{
    
        
    
    return(<>
    <div className="container main-div ">
    <div className="container img-container">
            <img src={logo} alt="img"/>
        </div>
        <div className="container heading-container">
            <h3 className="heading1"> Start your journey towards a safer internet</h3>
        </div>
        <div className="container d-flex flex-column button-container">
            <div className="d-grid gap-3 d-md-block d-flex flex-column buttonClass">
                <button className="btn btn-primary Buttons btn1"  type="button">Create account</button>
                <button className="btn btn-dark Buttons" type="button" ><i className="fa fa-apple Icons" ></i>Continue with Apple</button>
                
                
                <button className="btn btn-outline-dark Buttons btn3" type="button"><img  className="fa fa-google Icons" src={googlepic}/>Continue with Google</button>
            </div>
        </div>
        <div className="container  p-container">
            <p><span>Already have an account?</span></p>
        </div>

        <div className="container p-container1 ">
            <div className="d-grid gap-3 d-md-block d-flex flex-column buttonClass">
                <button className="btn btn-outline-dark Buttons" style={{color:"#000000"}} type="button" ><i  className="fa fa-envelope Icons"></i>Login with Email</button>
            </div>
        </div>
        </div>
    
    </>)
}

export default Login;