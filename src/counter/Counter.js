import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
	render() {
		return (
			<div className="counter">
				<p>Count: {this.props.count}</p>
				<div className="btn-group" role="group" aria-label="controls">
					<button
						onClick={this.props.increaseCount}
						className="btn btn-primary"
					>
						Increase
					</button>
					<button
						onClick={this.props.decreaseCount}
						className="btn btn-warning"
					>
						Decrease
					</button>
					<button
						onClick={this.props.resetCount}
						className="btn btn-default"
					>
						Reset
					</button>
				</div>
			</div>
		);
	}
}

Counter.propTypes = {
	count: PropTypes.number,
	increaseCount: PropTypes.func,
	decreaseCount: PropTypes.func,
	resetCount: PropTypes.func
};

export default Counter;
