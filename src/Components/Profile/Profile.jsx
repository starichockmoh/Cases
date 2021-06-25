import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import styles from './Pfofile.module.css'
import UserInfo from "./UserInfo";
import UserStatistic from "./UserStatistic";
import {withAuthRedirect} from "../../HOCs/withAuthRedirect";
import {GetProfile} from "../../BLL/Reducers/ProfileReducer";

class Profile extends React.Component {
    componentDidMount() {
        this.props.GetProfile()
    }

    render() {
        return <div className={styles.Profile}>
            <div className={styles.UserInfo}>
                <UserInfo
                    username = {this.props.ProfileInfo.username}
                    is_active = {this.props.ProfileInfo.is_active}
                    status = {this.props.ProfileInfo.status}
                    avatar = {this.props.ProfileInfo.avatar}
                />
            </div>
            <div className={styles.Statistic}>
                <UserStatistic
                    balance = {this.props.ProfileInfo.balance}
                    user_guns = {this.props.ProfileInfo.user_guns}
                />
            </div>
        </div>
    }
}


let mapStateToProps = (state) => ({
    ProfileInfo: state.Profile
})

const ProfileContainer = compose(
    connect(mapStateToProps, {GetProfile}),
    withRouter,
    withAuthRedirect,
)(Profile)

export default ProfileContainer