import React, {Component} from "react";
import pm from './Profile.module.css'
import MyPost from "./MyPost/MyPost";

const Profile = (props) =>{
    return(
        <div className={pm.content}>
            <div>
                <img className={pm.main_photo} src='https://www.amateurphotographer.co.uk/wp-content/uploads/2017/11/Bliss_Copyright_preview-e1511540750271.jpeg'/>
            </div>
            <div>
                ava+description
            </div>
            <MyPost/>
        </div>
    )
}
export default Profile;