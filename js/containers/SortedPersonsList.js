import { connect } from 'react-redux';
import PersonsList from '../components/PersonsList';

function mapStateToProps(state) {
  return {
    persons: state.persons.items
  };
}

export default connect(
  mapStateToProps
)(PersonsList);