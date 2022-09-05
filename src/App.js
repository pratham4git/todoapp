import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo]  = useState({name:"", email:""});
  const [todolist, setTodolist] = useState([]);
  return (
    <div className="container">
      <form className="formshadow" onSubmit={(e)=>{
       e.preventDefault()
       setTodolist([...todolist, todo])
       setTodo({name:"", email:""})        
      }}>
        <label>Enter Name:</label>
        <input
        value={todo.name}
        onChange={(e)=> {setTodo({...todo, name: e.target.value})}}
        />
        <label>Enter Email:</label>
        <input
        value={todo.email}
        onChange={(e)=>{setTodo({...todo, email: e.target.value})}}
        />
        <button>Submit</button> 
      </form>
      
      <ul className="listc">
        {todolist.map(item => (<li className="listclass" key={item.name}>{item.name}, {item.email} <button onClick={
          () => setTodolist(todolist.filter((i)=> i.name !== item.name))
        }>Delete</button></li>))}
      </ul>
    </div>
  );
}

export default App;
