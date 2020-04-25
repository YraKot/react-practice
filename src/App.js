import React, { useState, useEffect } from 'react';
import TodoList from './TodoList'

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [todoTitle, setTodoTitle] = useState('');

	useEffect(() => {
		const raw = JSON.parse(localStorage.getItem('todos')) || [];
		setTodos(raw);
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleChange = (e) => {
		setTodoTitle(e.target.value);
	}

	const addTodo = (e) => {
		if (e.key === 'Enter'){
			setTodos([
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
