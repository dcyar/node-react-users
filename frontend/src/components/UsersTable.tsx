import React from 'react'
import { Table } from 'react-bootstrap'
import {User} from '../App'

type props = {
  users: User[]
}

const UsersTable = ({users}: props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default UsersTable