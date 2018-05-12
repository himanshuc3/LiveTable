import { createStore, applyMiddleware } from 'redux';
import { combineForms, createForms } from 'react-redux-form';

const initialEventState = {
  eventName: '',
  day: '',
  startTime: '',
  endTime: ''
};

const store = createStore(combineForms({
    event: initialEventState,
}));

export default store;
  