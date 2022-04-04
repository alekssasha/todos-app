const TodoForm = ({text, todoAdd, setText}) => {
    return (
        <label >
				<input value={text} onChange={(e) => setText(e.target.value)}/>
				<button onClick={todoAdd}>Add Todo</button>
			</label>
    )
}

export default TodoForm;