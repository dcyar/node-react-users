import React from 'react'
import { Button, Form } from 'react-bootstrap'

export interface UserForm {
  name: string,
  email: string,
  password: string,
}

type props = {
  handleSubmit: (user: UserForm) => void,
}

const RegisterForm = ({handleSubmit}: props) => {
  const [form, setForm] = React.useState<UserForm>({
    name: '',
    email: '',
    password: '',
  })

  const handleChangeInput = (e: { target: { name: any; value: any } }): void => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    handleSubmit(form)
  }

  return (
    <Form onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleChangeInput} type="text" name="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChangeInput} type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChangeInput} type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" size="lg" type="submit">
        Register
      </Button>
    </Form>
  )
}

export default RegisterForm