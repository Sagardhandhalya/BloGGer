import React from 'react';
import {Link} from 'react-router-dom';
import connect from 'react-redux/lib/connect/connect';
import {logOut} from './../store/Actions/authActions'
const SignInLink =(props)=> {
const bt={
   
    textDecoration: "none",
    background:"#040613",
  paddingTop: "34px",
  paddingBottom: "23px",
  paddingRight: "10px",
  paddingLeft: "10px",
  marginRight:"10px",
  color:"white",
  fontSize:"20px",
  borderRadius:"15px"

}
    return(
       
            <div >
                
            
            <Link style={bt}  to="/New">New Project</Link>
            <a style={bt} href=" " onClick={props.LogOut}>Log Out</a>
            <Link style={{borderRadius:"100px",
            color:"white",fontSize:"30px",background:"pink",margin:"4px 2px",padding:"15px 20px"
            }}to="/" ><b>{props.profile.Init}</b></Link>
        
            </div>
       

    )
}
const mapDispatchToProps=(dispatch)=>{
    return {
        LogOut:()=> dispatch(logOut()),
    }
}

export default connect(null,mapDispatchToProps)(SignInLink);