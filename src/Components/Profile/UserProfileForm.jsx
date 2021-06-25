import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Select } from 'antd';
import {useDispatch} from "react-redux";
import {SetUserInfo} from "../../BLL/Reducers/ProfileReducer";
import {useCallback} from "react/cjs/react.production.min";

const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const UserProfileForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
        // dispatch(SetUserInfo(values))
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            name: 'User',
            gender: 'male',
        });
    };

    const dispatch = useDispatch()
    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item
                name="name"
                label="Name"
                rules={[{required: true}]}>
                <Input />
            </Form.Item>

            <Form.Item
                name="status"
                label="Status">
                <Input />
            </Form.Item>

            <Form.Item
                name="gender"
                label="Gender"
                rules={[{required: true}]}>
                <Select
                    placeholder="Select your gender"
                    allowClear
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                </Select>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
                <Button type="link" htmlType="button" onClick={onFill}>
                    Fill form
                </Button>
            </Form.Item>
        </Form>
    );
}

export default UserProfileForm
