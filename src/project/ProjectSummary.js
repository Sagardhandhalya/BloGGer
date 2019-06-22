import React from 'react'
import { Card,CardHeader, CardFooter, CardBody, CardText } from 'reactstrap';
import moment from 'moment';
const ProjectSummary=({project})=>{
  const st={background:"whte"
  ,border:"black 1px groove",borderRadius:"5px",boxShadow:"15px 1px 10px #9E9E9E"
  }
    return(
      
        <div >
        <Card style={st}>
          <CardHeader style={{color:"#2d3776",fontSize:"25px",fontWeight:"bold"}}>{project.title}</CardHeader>
          <CardBody>
            <CardText > Posted By <span style={{fontSize:"20px"}}><i>{project.FirstName} {project.LastName}</i></span></CardText>
            </CardBody>
          <CardFooter>  {moment(project.createdAt.toDate()).calendar()}</CardFooter>
        </Card>
        <br/>
        </div>
        
    );
}
export default ProjectSummary;