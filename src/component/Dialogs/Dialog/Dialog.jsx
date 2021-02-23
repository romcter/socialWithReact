import React from "react";
import dm from "../Dialogs.module.css";

const Dialog = (props) => {
    return (
        <div className={dm.dialog}>
            {props.name}
        </div>
    )
}
export default Dialog;