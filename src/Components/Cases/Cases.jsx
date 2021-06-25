import React from "react";
import styles from "./Cases.module.css"
import CaseItem from "./CaseItem/CaseItem";

const Cases = (props) => {
    let CasesArray = props.Cases.map(c=> <CaseItem key = {c.id} caseInfo = {c}/>)
    return <ul className={styles.cases}>
        {CasesArray}
    </ul>
}

export default Cases