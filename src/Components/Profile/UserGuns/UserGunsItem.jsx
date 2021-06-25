import React from "react";
import styles from "./UserGuns.module.css"


const UserGunsItem = ({caseInfo}) => {
    return <li className={styles.UserGunsItem}>
            <img className={styles.UserGunsItemImg} src={caseInfo.image} alt={'case'}/>
    </li>
}

export default UserGunsItem