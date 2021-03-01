import React from 'react';
import {withRouter} from "react-router";
import {addPost, setUserPhoto} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Profile from "./Profile";

class ProfileComponents extends React.Component{

    componentWillMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 1
        }
        axios.get(`http://localhost:8080/user/${userId}`).
        then(response => this.props.setUserPhoto(response.data.photo))
    }
    render() {
        return (
            <Profile {...this.props} photo = {this.props.profile}/>
        )
    }
}
let withUrlDataContainerComponent = withRouter(ProfileComponents)

let mapStateToProps = (state) => ({
    profile : state.profilePage.profile,
    posts : state.profilePage.posts
})

export default connect(mapStateToProps,
    {addPost,setUserPhoto})(withUrlDataContainerComponent)