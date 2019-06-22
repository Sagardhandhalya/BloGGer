import React from 'react';
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom';

const ProjectList = (props)=>{

    return(
        
        <div>
          <h3><b>Articals</b></h3><hr/>
       {
           props.projects && props.projects.map(project =>
            {
                
                return (
                    <Link style={{textDecoration:"none",color:"black"}} to={"/projects/"+project.id} key={project.id}>
            <ProjectSummary  project={project} />
            </Link>
            )
           }) 
       }
        </div>
    );
    }
export default ProjectList;