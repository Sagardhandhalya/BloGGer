import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormText,Button } from 'reactstrap';
import {connect} from 'react-redux';
import {createProject} from './../store/Actions/projectActions';
import { Redirect } from 'react-router-dom'
class NewProject extends Component {
    state={
        title:'',
        description:''
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
        this.props.create(this.state);
        this.props.history.push('/');
        
    }
    render() {
        const {auth} =this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div style={{padding:"3%",marginLeft:"20%",background:"white",marginRight:"20%",border:"pink 1px solid",borderRadius:"25px"}}>
        <Form  onSubmit={this.onsubmit}>
            <h1>Create new project</h1>
            <br/>
          <FormGroup>
          <Label for="exampleEmail">Enter Project Title</Label>
          <Input type="text" id="title" required onChange={this.handlechange} />
         
          <FormText>Enter your Title</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Enter some word about your project:</Label>
          <Input type="textarea" id="description" required row="10" onChange={this.handlechange} />
          
          <FormText>Enter project descreption above..</FormText>
        </FormGroup>
        
        <FormGroup>
         <Button color="success" size="sm"  id="submit" > UPLOAD </Button>
        </FormGroup>
      </Form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return { 
        create : (project) => dispatch(createProject(project))
    }
    
}
const mapStateToProps=(state)=>{
    console.log(state);
    return {
        auth:state.firebase.auth
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(NewProject);
