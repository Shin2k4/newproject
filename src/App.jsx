import React from 'react';
import { Form, Input, Button } from 'antd';


class FormCV extends React.Component {
  render() {
    return (
      <div>
        <h1>Form Điền CV</h1>
        <Form
          name="cv-form"
          onFinish={this.onFinish}
        >
          <Form.Item
            label="Họ và Tên"
            name="fullName"
            rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Vui lòng nhập email!' },
              { type: 'email', message: 'Email không hợp lệ!' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Số Điện Thoại"
            name="phoneNumber"
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Học Vấn"
            name="education"
            rules={[{ required: true, message: 'Vui lòng nhập thông tin học vấn!' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Kinh Nghiệm"
            name="experience"
            rules={[{ required: true, message: 'Vui lòng nhập thông tin kinh nghiệm!' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Gửi CV
            </Button>
          </Form.Item>
        </Form >
      </div >
    );
  }
}

export default FormCV;