import { connect } from 'react-redux';
import PersonsList from '../components/PersonsList';

function mapStateToProps(state) {
  return {
    persons: getSortedPersonsList(state.persons.items, state.sortType)
  };
}

const getSortedPersonsList = (persons, sortType) => {
	switch (sortType) {
		case 'BY_NAME': 
			return [].concat(persons).sort((p1, p2) => {
				if (p1.name > p2.name) return 1;
				if (p1.name < p2.name) return -1;
			});
		case 'BY_AGE':
			return [].concat(persons).sort((p1, p2) => {
				if (p1.age > p2.age) return 1;
				if (p1.age < p2.age) return -1;
			});
	}
} 

export default connect(
  mapStateToProps
)(PersonsList);