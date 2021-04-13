import React, { useState } from 'react';
import './input.css';

// redux
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';

const Input = () => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();

	const addTodo = () => {
		console.log(`Adding ${input}`);

		dispatch(
			saveTodo({
				name: input,
				done: false,
				id: Date.now(),
			})
		);

		setInput('');
	};

	return (
		<div className="input">
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={addTodo}>Add</button>
		</div>
	);
};

export default Input;
