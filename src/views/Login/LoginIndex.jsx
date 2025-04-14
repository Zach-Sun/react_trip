import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import styled from 'styled-components';
import bgImage from '@/assets/img/common/bg3.jpg';

const LoginContainer = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  padding-top: 20px;
  font-size: 6.66667vw;
  font-weight: 700;
  color: #ff9854;
  margin: 0;
`;

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  top: 100px;
`;

const RegisterPrompt = styled.div`
  position: relative;
  text-align: center;
  margin-top: 100px;
  color: #ff9854;
  a {
    color: #ff9854;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const LoginIndex = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const account = {
    name: "lannes",
    password: "zhangzihui",
  };

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      if (values.username === account.name && values.password === account.password) {
        message.success('登录成功！', 1);
        setTimeout(() => {
          navigate('/home');
          localStorage.setItem("account", JSON.stringify(account));
        }, 1000);
      } else {
        message.error('账号密码错误！', 1);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer className="tabbarhidden">
      <Title>弘源旅途</Title>
      <LoginForm>
        <Form
          form={form}
          name="login"
          onFinish={onSubmit}
          style={{ width: '80%', maxWidth: 400 }}
        >
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: '请填写用户名' }]}
          >
            <Input placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: '请填写密码' }]}
          >
            <Input.Password placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              loading={loading}
              style={{ borderRadius: '20px' }}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </LoginForm>
      <RegisterPrompt>
        <span>没有账号？马上<a onClick={() => navigate('/register')}>注册</a></span>
      </RegisterPrompt>
    </LoginContainer>
  );
};

export default LoginIndex;