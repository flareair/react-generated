import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = state => {
	return {
		appName: state.appName
	};
};

export default connect(
	mapStateToProps
)(Header);
