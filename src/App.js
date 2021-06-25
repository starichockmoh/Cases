import React from "react";
import './App.css';
import {HashRouter, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "./BLL/Store";
import MainLayout from "./Layout";
import {compose} from "redux";
import {AuthUser} from "./BLL/Reducers/AuthReducer";


class App extends React.Component {
    componentDidMount() {
        this.props.AuthUser()
    }

    render() {
        return (
            <MainLayout/>
        )
    }
}

let mapStateToProps = (state) => ({
    avatar: state.Profile.avatar
})
const AppContainer =compose(
    connect(mapStateToProps, {AuthUser}),
    withRouter,
)(App)

const CSProject = () => {
    return <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    </React.StrictMode>
}

export default CSProject;
