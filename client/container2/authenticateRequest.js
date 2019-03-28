import React from 'react';
import PostLogin from "../services/postLogin";
import PostRegister from "../services/postRegister";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { SetUSER, SetID } from "../store/actions/user";


/*const Register = async (obj) => {
    try {
        const user = await PostRegister(obj);
        if (user._id !== props.User._id) {
            props.SetUSER(user);
        } else { props.SetID("X"); }
    }
    catch (error) {
        console.log(error);
    }
}


const Auth = async (obj) => {
    try {
        const user = await PostLogin(obj);
        if (user._id !== this.props.User._id) {
            this.props.SetUSER(user);
        } else { this.props.SetID("X"); }
    }
    catch (error) {
        console.log(error);
    }
}*/

function HandleRequest(text, username, password) {

    return console.log("props");
    /*if (text === "Sign Up") {
        return Auth({ username, password });
    }
    else { return Register({ username, password }); }*/

}


export default connect(props => ({ User: props.User }))/*,
    dispatch => bindActionCreators({ SetUSER, SetID }, dispatch))*/(HandleRequest);

