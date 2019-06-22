import React from 'react'
import { Card,CardHeader, CardFooter, CardBody, CardText } from 'reactstrap';
 import {connect} from 'react-redux'
 import {firestoreConnect} from 'react-redux-firebase'
 import { compose } from 'redux'  
 import { Redirect } from 'react-router-dom'
 import moment from 'moment'
 
 const ProjectDetails =(props)=> {
  const st={marginLeft:"10%",background:"white",
  marginRight:"10%",boxShadow:"15px 1px 10px #9E9E9E"
  }
    const {project , auth} = props;
    
        if(!auth.uid) return <Redirect to='/signin'/>
    if(project)
    {
    
    return (
      
        
    
        <Card style={st}>
          <CardHeader style={{color:"#2d3776",fontSize:"25px",fontWeight:"bold"}}>{project.title}</CardHeader>
          <CardBody >
            <CardText style={{ fontSize:"18px"}}> {project.description} </CardText>
            
            </CardBody  >
          <CardFooter>{moment(project.createdAt.toDate()).calendar()}<br/> Posted By <b>{project.FirstName} {project.LastName}</b></CardFooter>
        </Card>

        
        
    );
    }
    else{
      return(
      <div style={{marginLeft:"20%",marginRight:"20%"}}>
      <Card>
      <CardHeader >Loading Your project......</CardHeader>
    </Card>
    </div>
      )
    }
}
const mapStateToProps=(state,ownProps)=>{
  
  const id = ownProps.match.params.id;
  const projects=state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project : project,
    auth:state.firebase.auth
    }

}

export default compose(connect(mapStateToProps),
firestoreConnect([
 { collection:'projects'}
])
)(ProjectDetails);
