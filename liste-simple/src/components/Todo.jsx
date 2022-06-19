import {  useSelector } from 'react-redux';

const Todos = () => {
    const todos = useSelector(state => state.todos);
    if (!todos || !todos.length) {
      return <p>Pas de todos !</p>
    }
    return (
      <ul>
        {todos.map(todo => <li>{todo.label}</li>)}
      </ul>
    )
  
  };
  export default Todos;