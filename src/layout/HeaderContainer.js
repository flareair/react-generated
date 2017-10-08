import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = state => {
	return {
		appName: state.metadata.appName
	};
};

export default connect(
	mapStateToProps
)(Header);
