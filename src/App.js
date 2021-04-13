import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Input from './components/input';
import TodoItem from './components/TodoItem';

import { useSelector } from 'react-redux'; // 데이터를 가져온다
import { selectTodoList } from './features/todoSlice';

function App() {
	const todoList = useSelector(selectTodoList);
	console.log(todoList);
	return (
		<div className="App">
			{/* Todo List */}
			<div className="app__container">
				<div className="app__todoContainer">
					{
						/* todoList를 루프해서 렌더링 한다*/
						todoList.map((item) => (
							<TodoItem //
								name={item.name}
								done={item.done}
								id={item.id}
								key={item.id}
							/>
						))
					}
				</div>
				<Input />
			</div>
		</div>
	);
}

export default App;
