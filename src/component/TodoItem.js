const TodoItem = ({id, text, completed, removeTodo, toggleTodoComplete}) => {
    return (
        <li>
            <input 
                type="checkbox" 
                checked={completed}
                onChange={() => toggleTodoComplete(id)}/>
                <span>{text}</span>
                <span style={{'color': 'red', 'cursor': 'pointer'}} onClick={() => removeTodo(id)}>&times;</span>
        </li>
    )
}

export default TodoItem;