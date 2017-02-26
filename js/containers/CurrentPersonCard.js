import { connect } from 'react-redux';
import PersonCard from '../components/PersonCard';
import { getSortedPersonsList } from './SortedPersonsList';

const mapStateToProps = (state) => {
  const currentPerson = getSortedPersonsList(state.persons.items, state.sortType, state.persons.searchString).length && !Object.keys(state.currentPerson).length ?
    getSortedPersonsList(state.persons.items, state.sortType, state.persons.searchString)[0] :
    state.currentPerson;
  return {
    person: currentPerson
  };
};

export default connect(
  mapStateToProps
)(PersonCard);
