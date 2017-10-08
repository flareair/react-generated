import { connect } from 'react-redux';
import { increaseCount, decreaseCount, resetCount } from '../actions/actions';

import Counter from './Counter';

const mapStateToProps = state => {
	return {
		count: state.count
	};
};
const mapDispatchToProps = dispatch => {
	return {
		increaseCount: () => {
			dispatch(increaseCount());
		},
		decreaseCount: () => {
			dispatch(decreaseCount());
		},
		resetCount: () => {
			dispatch(resetCount());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);
