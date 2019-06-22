import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Notification from './Notification';
import ProjectList from './../project/ProjectList';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'  
import { Redirect } from 'react-router-dom'

class Dashbord extends Component{
   
    render()
    {
        
        const {auth,notifications} =this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        const {projects} = this.props;    
        return (
            <div>
                <Container>
                    <Row> 
                    <Col xs="6">
                        <ProjectList projects={projects}/>
                    </Col>
          <Col xs="1"></Col>
          <Col xs="5">
              <Notification notifications={notifications} />
          </Col>
          
                        </Row>
                    </Container>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{

  return{
        auth:state.firebase.auth,
        notifications:state.firestore.ordered.notifications,
        projects:state.firestore.ordered.projects
  } 
}
export default compose( connect( mapStateToProps),firestoreConnect([
    {
        collection:'projects',orderBy:['createdAt','desc']
    }
    ,{
        collection:'notifications',limit:6,orderBy:['time','desc']
    }
]))(Dashbord)