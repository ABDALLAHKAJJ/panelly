import React from 'react'
import { Button, Form, Input } from 'antd'
import LoginBusinessManager from '../../../Business/LoginManager/LoginBusiness';
import { useNavigate } from 'react-router-dom';

function PanelLogin() {
  const navigate = useNavigate();

    let loginValidation =false;

    const onFinish = (values) => {
        console.log('Success:', values);
        loginValidation= LoginBusinessManager.LoginValidator(values)
        if (loginValidation) {
          navigate('/PanelLayout')
        }
        else{
          alert("Login Failed")
        }

      };
    
      const onFinishFailed = (errorInfo) => {
        alert("Login Failed")
        navigate('/')

        console.log('Failed:', errorInfo);
      };
  return (
    <>
        
    <Form
      name="basic"
      labelCol={{ span: 0 }}
      wrapperCol={{ span: 8 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{marginLeft:"35%"}}
    >
      <Form.Item style={{marginLeft:"25px"}}><h2>PANELLY Login Page</h2></Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 2, span: 4 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  
    </>
  )
}

export default PanelLogin