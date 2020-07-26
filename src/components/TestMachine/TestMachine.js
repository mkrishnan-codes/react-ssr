import React, { Component } from 'react';
import { DataList, DataSeleector } from '../lists/List';

class TestMachine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}
	
	 
	render() {
		return (
			<>
			<DataList/>
			<DataSeleector/>
			</>
		);
	}
}

export default TestMachine;

