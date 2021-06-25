import React from "react";
import styles from "./CaseItem.module.css"
import {NavLink} from "react-router-dom";


const CaseItem = ({caseInfo}) => {
    let CaseInfoURL = '/case/' + caseInfo.id
    return <li className={styles.CaseItem}>
        <NavLink to = {CaseInfoURL}>
        <img className={styles.CaseItemImg} src={caseInfo.image} alt={'case'}/>
        </NavLink>
        <div className={styles.Cost}>
            {caseInfo.price}
        </div>
        {caseInfo.name}

    </li>
}

export default CaseItem