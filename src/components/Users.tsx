import { Fragment, useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
}

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return <Fragment>
    <h1>Users</h1> 
    
    <ul>
      {users.map(user => <li role="listitem" key={user.id}>{user.name} - {user.email}</li>)}
    </ul>

  </Fragment>;
};