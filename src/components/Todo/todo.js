import React, { useState, useReducer } from 'react';
import './style.scss';
import Form from './Form';
let count = 1;
const todosReducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return [...state, { name: action.payload }]
		case 'mark':
			return state.map((item, i) => i === action.payload ? { ...item, done: !item.done } : item)
		default:
			return state;
	}
}
export const Todo = React.memo(() => {
	const [items, dispatch] = useReducer(todosReducer, [])
	return (
		<div className="todo-cont">
			<Form onSubmit={(payload) => dispatch({ type: 'add', payload })} />
			<ul>
				{
					items.map((item, payload) => <li key={payload}
						onClick={() => dispatch({ type: 'mark', payload })}
						className={item.done ? 'done' : ''}>{item.name}</li>)
				}
			</ul>
			<h3>Render - {count++}</h3>
		</div>
	);
})

