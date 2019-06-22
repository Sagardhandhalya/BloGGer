import React from 'react'
import { Card, CardBody } from 'reactstrap';
  import moment from 'moment'
const Notification = (props)=>{
  
  const {notifications} = props;
  const st={background:"whte"
  ,border:"green 2px groove",boxShadow:"10px 1px 25px #9E9E9E"
  }
    return (
        <div>
            <h3><b>Notification</b></h3><hr/>
        <Card style={st}>
                  <CardBody>
            
            <ul>
             { notifications && notifications.map((notification) =>{ return (

              <div  key={notification.id} >  <li style={{listStyleType:"none",margin:"0px",padding:"0px"}}>
                <p style={{fontSize:"22px"}}>  <span style={{fontWeight:"normal",color:"red"}}><i>{notification.user}</i></span> {notification.content}<br/>
                 <span style={{fontSize:"18px"}}>{moment(notification.time.toDate()).calendar()}</span></p>
                </li>
                </div>

              )} ) 
           }
           </ul>
          </CardBody>
        </Card>
      </div>
        
    )
}
export default Notification;