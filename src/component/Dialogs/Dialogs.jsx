import React from "react";
import dm from "./Dialogs.module.css"
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={dm.dialogs}>
            <div className={dm.dialogsItem}>
                <Message/>
            </div>
            <div className={dm.message}>
                <Message/>
                <textarea/>
                <button onClick={() => {alert('jopa')}}> Add Post</button>
            </div>
        </div>
    )
}

export default Dialogs;