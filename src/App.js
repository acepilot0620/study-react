import React, { useRef, useState} from "react";
import Counter from "./Counter";
import CreateUser from "./CreateUser";
import Hello from "./Hello";
import InputSample from "./inputSample";
import UserList from "./UserList";
import Wrapper from "./Wrapper";


function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  })
  const { username, email } = inputs
  const onChange = e => {
    const {name, value} = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }
  const  [users, setUsers] = useState([
      {
          id:1,
          username:"velopert",
          email:'public.velopert@gmail.com',
          active: true
      },
      {
          id:2,
          username:"acepilot0620",
          email:'acepilot0620@gmail.com',
          active: false
      },
      {
          id:3,
          username:"ryan",
          email:'ryanchoi0620@gmail.com',
          active: false
      },
  ])


  const nextId = useRef(4)

  const onCreate = () =>{
    const user = {
      id : nextId.current,
      username,
      email,
    }
    setUsers(users.concat(user))
    setInputs({
      username : '',
      email : ''
    })
    console.log(nextId.current)
    nextId.current += 1
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
        ? {...user, active: !user.active}
        : user
    ))
  }

  return (
    <>
    <CreateUser 
    username={username}
    email={email}
    onChange={onChange}
    onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
