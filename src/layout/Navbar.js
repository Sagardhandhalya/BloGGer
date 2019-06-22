import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'reactstrap';
import SignInLInk from './SignInLink';
import SignUpLInk from './SignUpLink';
import {connect} from 'react-redux';

const Navbar1 =(props)=> {
    const {auth , profile} = props;
   const link = auth.uid ? <SignInLInk profile={profile} /> : <SignUpLInk /> 
    return(
        <Navbar   color="dark"  style={{height:"80px",margin:"50px",marginTop:"0px",borderRadius:"25px",possition:"fixed"}}>
            <Link style={{fontSize:"30px",marginRight:"10%",marginLeft:"5%",color:"white"}} to="/"><b>BloGGer</b></Link>
           {link}
           
        </Navbar> 

    )
}
const mapStateToProps=(state)=>{

return{
    auth : state.firebase.auth,
    profile:state.firebase.profile
    
}
}
export default connect(mapStateToProps)(Navbar1);