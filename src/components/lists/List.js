import React from 'react';
import { withSubs } from '../hoc/withSubs';

export const List = (props) => {
	return (
		<ul>
			{
				props.data.map((item, i) => <li key={i}>{item[props.displayItemKey]}</li>)
			}
		</ul>
	);
}
export const DataList = withSubs(List, 'https://my-json-server.typicode.com/mkrishnan-codes/wierd-data/users', 'name')
export const Selector = (props) => {
	return (
		<select>
			{
				props.data.map((item, i) => <option key={i}>{item[props.displayItemKey]}</option>)
			}
		</select>
	);
}
export const DataSeleector = withSubs(Selector, 'https://my-json-server.typicode.com/mkrishnan-codes/wierd-data/locations', 'city')



