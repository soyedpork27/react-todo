import './App.css';

import {useState} from 'react';

function App() {

  const [todos , setTodos] = useState(()=>getFromLocalStorage());

  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((prev) => {
      return [...prev,todo];
    })
    setTodo('');

    localStorage.setItem("first-todo",JSON.stringify(todos));
  }

  const deleteAll = () => {
    localStorage.removeItem("first-todo");
    setTodos([]);
  }


  function getFromLocalStorage(){
    if(localStorage.getItem('first-todo')){
      const result = JSON.parse(localStorage.getItem('first-todo'));
      return result;
    }else{
      return [];
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleChange} />
        <br />
        <button type='submit'>등록</button>
      </form>

      <ul>
        {todos.map((i, idx)=>(<li key={idx}>{i}</li>))}
      </ul>

      <button onClick={deleteAll}> 모든 메모 삭제 </button>
    </>
  );
}

export default App;
