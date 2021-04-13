// rxslice - 익스텐션 설치 시 스니펫

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todoList: [],
};

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		saveTodo: (state, action) => {
			// state - 지금의 상태를 의미한다
			// action - 리덕스의 행동
			state.todoList.push(action.payload);
		},
		setCheck: (state, action) => {
			state.todoList.map((item) => {
				if (action.payload == item.id) {
					if (item.done === true) {
						item.done = false;
					} else {
						item.done = true;
					}
				}
			});
		},
	},
});

export const { saveTodo, setCheck } = todoSlice.actions;

// state를 내보냄
export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
