import React from 'react';

export const withSubs = (WrappedComp, url, displayItemKey) => {
	return class extends React.Component {
		constructor(props) {
			super();
			this.state = { data: [], error: null }
		}
		componentDidMount() {
			fetch(url)
				.then(
					(response) => {
						if (response.status !== 200) {
							this.setState({ error: 'Error occured' })
							return;
						}

						// Examine the text in the response
						response.json().then((data) => {
							this.setState({ data })
						});
					}
				)
				.catch((err) => {
					this.setState({ error: 'Error occured' })
				});
		}
		render() {
			return this.state.error ? this.state.error : <WrappedComp data={this.state.data} displayItemKey={displayItemKey} />
		}
	}
}