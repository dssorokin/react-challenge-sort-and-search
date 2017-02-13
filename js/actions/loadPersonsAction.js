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

export function loadPersonsAction() {
  return (dispatch, getState) => {
    dispatch(loadingChangedAction(true));
    return fetch('data.json')
      .then((res) => {
        dispatch(loadingChangedAction(false));
        return res.json();
      })
      .then(res => dispatch(addPersonsAction(res)));
  };
}