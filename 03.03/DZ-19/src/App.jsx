import React, { useState } from 'react';

import { Form, Input, Button, Card, Typography } from 'antd';



const { Title } = Typography;



function App() {

  const [formData, setFormData] = useState({ name: '', description: '' });

  const [submittedData, setSubmittedData] = useState(null);



  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value,

    });

  };



  const handleSubmit = () => {

    setSubmittedData(formData);

  };



  return (

    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>

      <Title level={2}>Форма с использованием Ant Design</Title>

      <Form layout="vertical">

        <Form.Item label="Имя">

          <Input

            name="name"

            value={formData.name}

            onChange={handleInputChange}

            placeholder="Введите ваше имя"

          />

        </Form.Item>

        <Form.Item label="Описание">

          <Input

            name="description"

            value={formData.description}

            onChange={handleInputChange}

            placeholder="Введите описание"

          />

        </Form.Item>

        <Form.Item>

          <Button type="primary" onClick={handleSubmit}>

            Отправить

          </Button>

        </Form.Item>

      </Form>



      {submittedData && (

        <Card style={{ marginTop: '20px' }}>

          <Title level={4}>Отправленные данные:</Title>

          <p><strong>Имя:</strong> {submittedData.name}</p>

          <p><strong>Описание:</strong> {submittedData.description}</p>

        </Card>

      )}

    </div>

  );

}



export default App;