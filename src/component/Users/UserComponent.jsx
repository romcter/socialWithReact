import React from 'react';
import {connect} from "react-redux";
import {followAC, setTotalElementsAC, setCurrentPageAC, setUsers, unFollowAC} from "../../redux/users-reducer";
import * as axios from "axios";
import User from "./User";

class UserComponent extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:8080/user?page=${this.props.currentPage}&size=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.content);
                this.props.setTotalElements(response.data.totalElements);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:8080/user?page=${pageNumber}&size=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.content);
            });
    }

    render(){
        return <User totalElements={this.props.totalElements}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     userPage={this.props.userPage}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}
        />
    }
}


let mapStateToProps = (state) =>{
    return {
        userPage: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalElements: state.userPage.totalElements,
        currentPage: state.userPage.currentPage
    }
}
let mapStateToDispatch = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unFollowAC(userId))},
        setUsers: (user) => {dispatch(setUsers(user))},
        setCurrentPage: (pageId) => {dispatch(setCurrentPageAC(pageId))},
        setTotalElements: (totalElements) => {dispatch(setTotalElementsAC(totalElements))}
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(UserComponent);