import React, { useState } from 'react';
import TodoList from './TodoList'

export const App = () => {
	const [todos, setTodo] = useState([
		{ id: 1, title: 'First todo', completed: false },
		{ id: 2, title: 'Second todo', completed: true },
	]);

	const [todoTitle, setTodoTitle] = useState('');

	const handleChange = (e) => {
		setTodoTitle(e.target.value);
	}

	const addTodo = (e) => {
		if (e.key === 'Enter'){
			setTodo([
				...todos,
				{
					id: Date.now(),
					title: todoTitle,
					completed: false
				}
			]);
			setTodoTitle('');
		}
	}

	return (
		<div className="container">
			<h1>Todo app</h1>

			<div className="input-field">
				<input 
					type="text"
					value={todoTitle}
					onChange={handleChange}
					onKeyPress={addTodo}
				/>
				<label>Todo name</label>
			</div>

			<TodoList todos={todos} />
		</div>
	);
}

export default App;
