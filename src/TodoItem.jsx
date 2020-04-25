import React, { useState } from 'react'

export const TodoItem = ({ title, id, completed }) => {
	const [checked, setChecked] = useState(completed);
	const cls = ['todo'];

	if (checked) {
		cls.push('completed');
	}

	const handleChange = (e) => {
		setChecked(!checked);
	}

	return (
		<li className={cls.join(' ')}>
			<label>
				<input
					type="checkbox"
					defaultChecked={checked}
					onChange={handleChange}
				/>
				<span>{title}</span>
				<i className="material-icons red-text">delete</i>
			</label>
		</li>
	)
}

export default TodoItem;