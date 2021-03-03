import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"pass"} component={"input"}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}
export default reduxForm({form: 'login'})(LoginForm);