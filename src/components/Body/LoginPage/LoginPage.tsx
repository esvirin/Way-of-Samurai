import React from "react";
import {Button, Checkbox, Form, Input} from 'antd';

type PropsType = {
    loginMe: () => void
}


function LoginPage(props: PropsType) {
    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 12},
    };
    const tailLayout = {
        wrapperCol: {offset: 8, span: 12},
    };

    const Demo = () => {
        const onFinish = (values: any) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };
    }
        return <Form
            {...layout}
            name="basic"
            initialValues={{remember: true}}
            // onFinish={}
            // onFinishFailed={}
        >
            <Form.Item
                label="Username"
                name="email"
                rules={[{required: true, message: 'Please input your email!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item {...tailLayout} name="rememberMe" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>


        // return <Formik
        //     initialValues={{
        //         email: '',
        //         password: '',
        //         rememberMe: false,
        //         captcha: false
        //     }}
        //     onSubmit={props.loginMe}
        // >
        //     <Form >
        //
        //         <label htmlFor="email">Login</label>
        //         <Field
        //             id="email"
        //             name="email"
        //             placeholder="email"
        //             type="email"
        //         />
        //         <label htmlFor="password">Password</label>
        //         <Field
        //             id="password"
        //             name="password"
        //             placeholder="password"
        //             type="password"
        //         />
        //
        //         <label htmlFor="rememberMe">stay logged</label>
        //         <Field
        //             id="rememberMe"
        //             name="rememberMe"
        //             type="checkbox"
        //         />
        //
        //         <button type="submit">Login</button>
        //     </Form>
        // </Formik>

}
    export default LoginPage