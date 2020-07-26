import React, { useState } from 'react';

const Form = (props) => {
	const [item, setitem] = useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		props.onSubmit(item)
		setitem('');
	}
	return (<form onSubmit={onSubmit}>
		<input value={item} onChange={(e) => setitem(e.target.value)} />
	</form>)
}

export default Form;
