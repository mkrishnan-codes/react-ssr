import React, { useState, useCallback } from 'react';
import './style.scss';
import Form from './Form';
let count = 1;

export const Todo = React.memo(() => {
	const [items, setitems] = useState([]);
	const onSubmit = useCallback(item => setitems([...items, { name: item, done: false }]), [items])

	const mark = index => setitems(items.map((item, i) => i === index ? { ...item, done: !item.done } : item))
	console.log('RRR',count++);
	return (
		<div className="todo-cont">
			<Form onSubmit={onSubmit} />
			<ul>
				{
					items.map((item, i) => <li key={i}
						onClick={() => mark(i)}
						className={item.done ? 'done' : ''}>{item.name}</li>)
				}
			</ul>
		</div>
	);
})

