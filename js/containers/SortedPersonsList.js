import { connect } from 'react-redux';
import PersonsList from '../components/PersonsList';
import { setCurrentPerson } from '../actions/actions';

function mapStateToProps(state) {
  return {
    persons: getSortedPersonsList(
      state.persons.items,
      state.sortType,
      state.persons.searchString
    )
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (person) => {
      dispatch(setCurrentPerson(person));
    }
  };
}

export const getSortedPersonsList = (persons, sortType, needle) => {
  switch (sortType) {
    case 'BY_NAME':
      const list = [].concat(persons)
        .sort((p1, p2) => {
          if (p1.name > p2.name) return 1;
          if (p1.name < p2.name) return -1;
          return 1;
        });
      console.log(list.filter(p => p.name.indexOf(needle) !== -1));
      return [].concat(persons)
        .sort((p1, p2) => {
          if (p1.name > p2.name) return 1;
          if (p1.name < p2.name) return -1;
          return 1;
      }).filter(p => p.name.indexOf(needle) !== -1);
    case 'BY_AGE':
      return [].concat(persons).sort((p1, p2) => {
        if (p1.age > p2.age) return 1;
        if (p1.age < p2.age) return -1;
        return 1;
      }).filter(p => p.name.indexOf(needle) !== -1);
    default:
      return persons;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonsList);