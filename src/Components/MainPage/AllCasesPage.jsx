import React from "react";
import {connect} from "react-redux";
import Cases from "../Cases/Cases";
import styles from "./AllCasesPage.module.css"
import {GetCases} from "../../BLL/Reducers/CasesReducer";
import {withAuthRedirect} from "../../HOCs/withAuthRedirect";
import {compose} from "redux";



class AllCasesPage extends React.Component {

    componentDidMount() {
        this.props.GetCases()
    }

    render() {
        return <div>
            <div className={styles.Title}>
                Все кейсы у нас!
            </div>
            <Cases {...this.props }/>
        </div>
    }
}




let mapStateToProps = (state) => ({
    Cases: state.Cases.cases
})

export default compose(
    connect(mapStateToProps, {GetCases}),
    withAuthRedirect)(AllCasesPage)