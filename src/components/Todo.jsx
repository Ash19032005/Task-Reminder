import { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css';
import { TodoItems } from './TodoItems';
let count=1;
export const Todo = () => {
  const [Todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const add = () => {
    setTodos([...Todos, { no:count++, text: inputRef.current.value, display: '' }]);
    inputRef.current.value = '';
  };
  useEffect(()=>{
       setTodos(JSON.parse(localStorage.getItem("Todos")));
  },[])
  useEffect(() => {
       setTimeout(()=>{
              console.log(Todos);
              localStorage.setItem("Todos",JSON.stringify(Todos));
       },100);
  }, [Todos]);


  return (
    <div>
       <div className='Todo'>
             <div className='todo-header'>Todo-List</div> 
              <div className="todo-add">
              <input type='text' ref={inputRef} className='todo-input' placeholder='Enter Text'/>
              <button onClick={()=>{add()}} className='todo-add-btn'>ADD</button>
              </div>
              <div className='Todo-list'>
                   {Todos.map((item,index)=>{
                         return <TodoItems  key={index} no={item.no} text={item.text} display={item.display} setTodos={setTodos}/>
                   }
                   )}
              </div>
       </div>
    </div>
  )
}
