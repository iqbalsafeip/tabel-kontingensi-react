import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import Thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(Thunk));

export default store;
