import React, {useState} from "react";
import './App.css';
import 'antd/dist/antd.css';
import {NavLink, Redirect, Route, Switch} from "react-router-dom"
import MainPage from "./Components/MainPage/AllCasesPage";
import CaseInfo from "./Components/Cases/CaseInfo/CaseInfo";
import GunsFeed from "./Components/GunsFeed/GunsFeed";
import {Avatar, Button, PageHeader} from 'antd';
import logo from "./Accets/logo.svg"
import ProfileContainer from "./Components/Profile/Profile";
import {UserOutlined} from "@ant-design/icons";
import LoginPage from "./Components/Login/LoginPage";
import TestJquery from "./Components/Roulette/Roulette";
import {connect} from "react-redux";
import {LogoutUser} from "./BLL/Reducers/AuthReducer";


const LogoutHeader = (props) => {
    let [isWarningMessage, showWarningMessage] = useState(false)
    let [RedirectLogin, letRedirect ] = useState(false)
    const LogoutUser = async () => {
        await props.LogoutUser()
        letRedirect(true)
        showWarningMessage(false)
        letRedirect(false)
    }
    return <div>
        {props.isAuth
            ? <>
                <NavLink to='/profile'> Profile </NavLink>
                <Avatar shape='circle' size={50} icon={<UserOutlined/>} src={props.avatar}/>
                <Button onClick = {() => {showWarningMessage(true)}}> Exit </Button>
            </>
            : <NavLink to='/login'> Login </NavLink>

        }
        {isWarningMessage && <>
            <div> Are you sure ?</div>
            <Button onClick={LogoutUser}> Yes </Button>
            {RedirectLogin && <Redirect to={'./login'}/>}
            <Button onClick={() => {showWarningMessage(false)}}> No </Button>
        </>}

    </div>
}
let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    avatar: state.Profile.avatar
})
let ConnectLogoutHeader = connect(mapStateToProps, {LogoutUser})(LogoutHeader)


const MainLayout = (props) => {
    return (
        <div>
            <PageHeader
                className="header"
                onBack={() => <NavLink to='./'>Back</NavLink>}
                backIcon={<NavLink to='/'> Main </NavLink>}
                title="CasesOnline"
                subTitle="You gonna lose"
                avatar={{src: logo}}
                ghost={false}
                extra={
                    [<ConnectLogoutHeader/>]
                }
            />
            <div className={"content"}>
                <MainContent/>
            </div>
        </div>
    );
}

const MainContent = () => {
    return <div>
        <GunsFeed/>
        <Switch>
            <Route path={'/login'} render={() => <LoginPage/>}/>
            <Route path={'/roulette/:caseId?'} render={() => <TestJquery/>}/>
            <Route path={'/case/:caseId?'} render={() => <CaseInfo/>}/>
            <Route path={'/profile/:userIf?'} render={() => <ProfileContainer/>}/>
            <Route path={'/'} render={() => <MainPage/>}/>
        </Switch>
    </div>
}


export default MainLayout