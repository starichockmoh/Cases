import React from "react";
import {Button, Col, Row, Statistic} from "antd";
import 'antd/dist/antd.css';
import UserGuns from "./UserGuns/UserGuns";


const UserStatistic = (props) => {
    return <>
        <Row gutter={16}>
            <Col span={12}>
                <Statistic title="Opened Cases" value={93}/>
            </Col>
            <Col span={12}>
                <Statistic title="Balance" value={props.balance} precision={2}/>
                <Button style={{marginTop: 16}} type="primary">
                    Пополнить
                </Button>
            </Col>
            <Col span={12}>
                <Statistic title="Favourite Case" value={'??'} precision={2}/>
            </Col>
            {props.user_guns && <UserGuns UserGuns = {props.user_guns}/>}
        </Row>
    </>
}

export default UserStatistic