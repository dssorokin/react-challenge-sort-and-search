import { connect } from 'react-redux';
import PersonsForm from '../components/PersonsForm';
import { searchPersonAction } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  onKeyDown: (val) => {
    dispatch(searchPersonAction(val));
  }}
);

export default connect(
  null,
  mapDispatchToProps
)(PersonsForm);
