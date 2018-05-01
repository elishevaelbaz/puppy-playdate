import React from 'react';
import MainPanel from "./MainPanel";
import profiles from "../../profiles.json";
import "./UserProfile.css";
  
    const UserProfile = props => {
      return (
    
        <div id="user-profile">
          <MainPanel info={props} />
        </div>
     
     )
  }

 export default UserProfile;