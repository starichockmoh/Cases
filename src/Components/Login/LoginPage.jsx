import React from "react";
import {Row} from "antd";
import 'antd/dist/antd.css';
import styles from "./Login.module.css"
import Login from "./Login";
import {connect} from "react-redux";
import {LoginUser} from "../../BLL/Reducers/AuthReducer";
import {Redirect} from "react-router-dom";


const LoginPage = (props) => {
    if (props.isAuth) {
        return <Redirect to = {'./'}/>
    }
    return <div className={styles.Login}>
        <Row gutter={16}>
           <Login {...props}/>
        </Row>
    </div>
}

let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
})
export default connect (mapStateToProps, {LoginUser})(LoginPage)