import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const RegisterForm = props => {
  const [comfirmDirty, setComfirmDirty] = useState(false);
  const formItemLayout = {
    labelCol: {
      span: 24
    },
    wrapperCol: {
      span: 24
    }
  };

  const tailFormItemLayout = {
    wrapperCol: {
      span: 24
    }
  };

  const handleConfirmBlur = e => {
    const value = e.target.value;
    setComfirmDirty(comfirmDirty || !!value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      } else {
        console.error(err);
      }
    });
  };

  const validateToNextPassword = (rule, value, callback) => {
    const form = props.form;
    if (value && comfirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const form = props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Inconsistent passwords");
    } else {
      callback();
    }
  };

  const { getFieldDecorator } = props.form;

  return (
    <section className="container">
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit} {...formItemLayout} labelAlign="left">
        <Form.Item label="Username">
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Input your username" }]
          })(<Input placeholder="username" />)}
        </Form.Item>

        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                required: true,
                message: "Input your email"
              },
              {
                type: "email",
                message: "The input is not valid E-mail"
              }
            ]
          })(<Input placeholder="email" />)}
        </Form.Item>

        <Form.Item label="Password">
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Input your password"
              },
              {
                validator: validateToNextPassword
              }
            ]
          })(<Input.Password placeholder="password" />)}
        </Form.Item>

        <Form.Item label="Confirm Password">
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Comfirm your password"
              },
              { validator: compareToFirstPassword }
            ]
          })(
            <Input.Password
              placeholder="comfirm password"
              onBlur={handleConfirmBlur}
            />
          )}
        </Form.Item>

        <Form.Item {...tailFormItemLayout} style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Register
          </Button>
          Already have a account? <Link to="/login">Sign in</Link>
        </Form.Item>
      </Form>
    </section>
  );
};

const Register = Form.create({ name: "normal_login" })(RegisterForm);
export default Register;
