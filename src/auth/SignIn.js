import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormText,Button } from 'reactstrap';
import {connect} from 'react-redux'
import {Login} from './../store/Actions/authActions'
import { Redirect } from 'react-router-dom'
class SignIn extends Component {
    state={
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

       this.props.login(this.state);
    }
    render() {
        const st={padding:"2%",marginTop:"5%",marginLeft:"35%",background:"white",
        marginRight:"35%",border:"green 2px groove",borderRadius:"25px",
        boxShadow:"15px 1px 25px #9E9E9E"
        
        }
        const {auth,authError} =this.props;
        if(auth.uid) return <Redirect to="/"/>
        return (
            <div style={st}>
        <Form  onSubmit={this.onsubmit}>
          <FormGroup>
          <h2 style={{textAlign:"center",color:"green"}}>Login<hr style={{color:"green",width:"100%",border:"green 2px solid"}}/></h2>
          <Label >Enter E-mail : </Label>
          <Input type="email" valid id="email" onChange={this.handlechange} />
         
          <FormText>Enter your email ie:dhandhalyasagar0@gmail.com</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Enter PassWord :</Label>
          <Input type="password" valid id="password" onChange={this.handlechange} />
          
          <FormText>enter password greater than 8 charecter</FormText>
        </FormGroup>
        
        <FormGroup>
         <Button color="success" size="lg" id="submit" > Login </Button>
        </FormGroup>
        {(authError != null) ? <Label style={{color:"red",marginLeft:"50%"}} for="examplePassword">{authError}</Label> :null}
      </Form>

            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        login:(cred)=>dispatch(Login(cred))
    }
}
const mapStateToProps =(state) =>{
    return {
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
