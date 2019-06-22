import React from 'react';
import {Link} from 'react-router-dom';
const SignUpLink =()=> {
    const bt={
   
        textDecoration: "none",
        background:"#040613",
      paddingTop: "34px",
      paddingBottom: "20px",
      paddingRight: "20px",
      paddingLeft: "20px",

      color:"white",
      fontSize:"20px",
      borderRadius:"15px",
      margin:"10px"
    
    }
      
    return(
            <div >
                
            
            <Link style={bt}  to="/signin">Login</Link>
            <Link style={bt} to="/signup">SignUp</Link>
            
        
            </div>
       

    )
}
export default SignUpLink;