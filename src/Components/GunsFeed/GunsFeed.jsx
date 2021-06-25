import React from "react";
import styles from "./GunsFeed.module.css"
import {connect} from "react-redux";
import {GetGunsFeed} from "../../BLL/Reducers/GunsFeedReducer";

class GunsFeed extends React.Component {
    componentDidMount() {
        this.props.GetGunsFeed()
    }

    render() {
        let GunsFeed = this.props.GunsFeed.map(gun =>
            <li className={styles.GunsListItem}>
               <img src={gun.image} alt='Gun'/>
            </li>)
        return <div className={styles.GunsFeed}>
            {this.props.TotalUserCount}
            {this.props.TotalOpenCases}
            <lu className={styles.GunsList}>
                {GunsFeed}
            </lu>
        </div>
    }
}

let mapStateToProps = (state) => ({
    GunsFeed: state.GunsFeed.GunsFeed,
    TotalUserCount: state.GunsFeed.TotalUserCount,
    TotalOpenCases: state.GunsFeed.TotalOpenCases
})

export default connect(mapStateToProps, {GetGunsFeed})(GunsFeed)