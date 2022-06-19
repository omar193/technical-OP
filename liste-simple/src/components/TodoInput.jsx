
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const TodoInput = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState();
    const handleChange = event => setNewTodo(event.target.value);
    const handleClick = () => dispatch({
        type: 'addElement',
        payload: {
            label: newTodo,
            id: Math.ceil(Math.random() * 100),
        }
    })
    return (
        <>
            <input type="text" value={newTodo} onChange={handleChange} placeholder="Saisir une chaine..." />
            <button onClick={handleClick}>Add todo</button>
        </>
    )

};

export default TodoInput;