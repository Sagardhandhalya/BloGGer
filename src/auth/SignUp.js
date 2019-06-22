import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormText,Button } from 'reactstrap';
import {connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { signUp} from './../store/Actions/authActions'

class SignUp extends Component {
    state={
        FirstName:'',
        LastName:'',
        email:'',
        password:''
    }
    handlechange=(e)=>{
        this.setState(
            {
                [e.target.id]:e.target.value
            }
        )
       
    }
    onsubmit=(e)=>{
        e.preventDefault();
        this.props.signup(this.state);
        
    }
    render() {
      const st={padding:"2%",marginTop:"0",marginLeft:"35%",background:"white",
      marginRight:"35%",border:"green 2px groove",borderRadius:"25px",
      boxShadow:"15px 1px 25px #9E9E9E"}
      const {auth,authError} =this.props;
      if(auth.uid) return <Redirect to="/"/>
        return (
            <div style={st}>
        <h2 style={{textAlign:"center",color:"green"}}>Sign Up<hr style={{color:"green",width:"100%",border:"green 2px solid"}}/></h2>
        <Form  onSubmit={this.onsubmit}>
        <FormGroup>
          <Label for="exampleEmail">Enter Your First Name :</Label>
          <Input type="text" id="FirstName" valid required onChange={this.handlechange} />
         
         
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Enter Your Last Name :</Label>
          <Input type="text" id="LastName" valid required onChange={this.handlechange} />
      
        </FormGroup>
          <FormGroup>
          <Label >Enter E-mail :</Label>
          <Input type="email" id="email" valid required onChange={this.handlechange} />
         
          <FormText>Enter your email ie:dhandhalyasagar0@gmail.com</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Enter PassWord :</Label>
          <Input type="password" id="password" valid required onChange={this.handlechange} />
          
          <FormText>enter password greater than 8 charecter</FormText>
        </FormGroup>
        
        <FormGroup>
         <Button color="success" style={{textAlign:"center",color:"white"}} id="submit" > SignUp </Button>
        </FormGroup>
        {(authError != null) ? <Label style={{color:"red",marginLeft:"50%"}} for="examplePassword">{authError}</Label> :null}
      </Form>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    signup:(newUser) => dispatch(signUp(newUser))
  }
}
const mapStateToProps=(state)=>{
  return {
    auth:state.firebase.auth,
    authError:state.auth.authError
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
