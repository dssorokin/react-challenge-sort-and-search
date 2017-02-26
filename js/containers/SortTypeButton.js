import { connect } from 'react-redux';
import Button from '../components/Button';
import { setSortType, setCurrentPerson } from '../actions/actions';
import { getSortedPersonsList } from './SortedPersonsList';

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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
