export function loadingChangedAction(isLoading) {
  return {
    type: 'IS_LOADING',
    isLoading
  };
}

export function addPersonsAction(persons) {
  return {
    type: 'ADD_ITEMS',
    items: persons
  };
}

export function setSortType(filter) {
  return {
    type: 'SET_SORT_TYPE',
    filter
  };
}

export function setCurrentPerson(person) {
  return {
    type: 'SET_CURRENT_PERSON',
    person
  };
}

export function searchPersonAction(name) {
  return {
    type: 'SET_SEARCH_STRING',
    name
  };
}

export function loadPersonsAction() {
  return (dispatch, getState) => {
    dispatch(loadingChangedAction(true));
    return fetch('data.json')
      .then((res) => {
        dispatch(loadingChangedAction(false));
        return res.json();
      })
      .then(res => {
        dispatch(addPersonsAction(res));
      });
  };
}
