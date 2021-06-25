import React from "react";
import styles from "./UserGuns.module.css"
import UserGunsItem from "./UserGunsItem";

const UserGuns = (props) => {
    let UserGuns = props.UserGuns.map(c=> <UserGunsItem key = {c.id} caseInfo = {c}/>)
    return <ul className={styles.UserGuns}>
        {UserGuns}
    </ul>
}

export default UserGuns