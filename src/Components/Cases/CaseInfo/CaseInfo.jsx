import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import styles from "./CaseInfo.module.css"
import {Button, Card, Col, Row, Statistic} from "antd";
import 'antd/dist/antd.css';
import UserGuns from "../../Profile/UserGuns/UserGuns";
import {GetCaseInfo} from "../../../BLL/Reducers/CaseInfoReducer";
import {NavLink} from "react-router-dom"


class CaseInfo extends React.Component {
    componentDidMount() {
        let caseId = this.props.match.params.caseId
        this.props.GetCaseInfo(caseId)
    }

    render() {
        let RouletteId = '/roulette/' + this.props.CaseInfo.id
        return <div className={styles.CaseInfo}>
            <div className={styles.CaseProfile}>
                <Card
                    title="Case Info"
                    extra={<NavLink to = {RouletteId}><Button>
                        Buy </Button></NavLink>}
                    style={{width: 300}}>
                    <img className={styles.CaseInfoImg} src={this.props.CaseInfo.image} alt=''/>
                    <p><span className={styles.CaseInfoSpan}>Name </span>{this.props.CaseInfo.name}</p>
                    <p><span className={styles.CaseInfoSpan}>Cost </span>{this.props.CaseInfo.price}</p>
                </Card>
            </div>
            <div className={styles.Guns}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="Guns in case" value = {6} />
                    </Col>
                    <UserGuns UserGuns = {this.props.CaseInfo.weapon}/>
                </Row>
            </div>

        </div>
    }
}


let mapStateToProps = (state) => ({
    CaseInfo: state.CaseInfo
})
const CaseInfoContainer = compose(
    connect(mapStateToProps, {GetCaseInfo}),
    withRouter
)(CaseInfo)
export default CaseInfoContainer