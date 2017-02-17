import { connect } from 'react-redux';
import Button from '../components/Button';
import { setSortType } from '../actions/actions';

function mapStateToProps(state, ownProps) {
	return {
		active: state.sortFilter === ownProps.filter
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onClick: () => {
			dispatch(setSortType(ownProps.filter));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Button);