import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import UsersTable from './components/UsersTable';
import {UserForm} from './components/RegisterForm';

export interface User {
  _id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [status, setStatus] = useState(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if(status) fetchUsers()
  }, [status])

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`)
    const {data} = await response.json()

    setError('')
    setUsers(data)
  }

  const handleSubmit = async(user: UserForm) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      const data = await response.json()

      if(!response.ok) throw new Error(data.message)

      setStatus(true)
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div>
      <Navbar />
      
      <Container className="mt-4">
        <Row className="justify-content-md-center">
          <Col md="auto">
            {error && <div className="alert alert-danger">{error}</div>}
            {status
              ? <UsersTable users={users} />
              : <RegisterForm handleSubmit={handleSubmit} />
            }

            {status && <button onClick={() => setStatus(false)} className="btn btn-primary">Back</button>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
