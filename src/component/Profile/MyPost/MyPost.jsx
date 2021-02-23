import React, {Component} from "react";
import mpm from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {
    // let post = props.post.map(i => <Post name={i.message}/>)
    return (
        <div className={mpm.myPost}>
            my post
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
export default MyPost;