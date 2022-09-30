import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 

import axios from 'axios'


const RegisterForm = () => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();
    const [data,setData] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
      .post("https://localhost:7151/api/Auth/Register", {
        email: email,
        password:password,
        confirmPassword : confirmPassword
      })
      .then((response) => {
        setData(response.data);
        console.log(data);
      });
    }

  return (
    <Form className="col-6">
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e) => {setConfirmPassword(e.target.value)}}/>
    </Form.Group>
    <Button variant="primary" type="submit" onClick={handleSubmit}>
      Submit
    </Button>
   

   
  </Form>
  );
}

export default RegisterForm