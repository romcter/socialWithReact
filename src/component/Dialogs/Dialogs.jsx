import React from "react";
import dm from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {

    // let result = props.dial.dialog.map( i => <Dialog name={i.mess}/>);
    // let right = props.dial.people.map( it => <Dialog name={it.name}/>);

    return (
        <div className={dm.dialogs}>
            <div className={dm.dialogsItem}>
                <Dialog/>
                <Dialog/>
                <Dialog/>
            </div>
            <div className={dm.message}>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <textarea/>
                <button onClick={() => {alert('jopa')}}> Add Post</button>
            </div>
        </div>
    )
}

// let newText = React.createRef();
// let addPost = () => {
//     let text = newText.current.value;
//     alert(text)
// }

export default Dialogs;