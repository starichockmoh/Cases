import React, {useState} from "react";
import {Avatar, Button, Card} from "antd";
import styles from "./Pfofile.module.css"
import {UserOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';
import UserProfileForm from "./UserProfileForm";


const UserInfo = (props) => {
    let [EditMode, activateEditMode] = useState(false)
    const EditModeToggle = () => {
        activateEditMode(!EditMode)
    }

    let URL = props.avatar
    return <>
        <Avatar shape='square' size={200} icon={<UserOutlined/>} src={URL}/>
        <Card
            title="User Info"
            extra={<Button onClick = {EditModeToggle}>
                Change Profile</Button>}
            style={{ width: 300 }}>
            <p><span className={styles.UserInfoSpan}>Active</span> {props.is_active?'Актив':'Пассив'}</p>
            <p><span className={styles.UserInfoSpan}>Name</span> {props.username}</p>
            <p><span className={styles.UserInfoSpan}>Status</span> {props.status}</p>
            <p><span className={styles.UserInfoSpan}>Gender</span> Male </p>
            {EditMode &&
                <>
            <UserProfileForm/>
            <Button type = 'link' onClick = {EditModeToggle}> Close </Button>
                </>
            }
        </Card>
    </>
}

export default UserInfo