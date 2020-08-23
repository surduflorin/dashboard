import { Map, fromJS } from 'immutable';
import { INIT } from '../constants/reduxFormConstants';

const initialState = {
  usersLogin: Map({
    email: 'thomas@invisionapp.com',
    password: 'thomas',
    remember: true
  })
};
const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case INIT:
      return state;
    default:
      return state;
  }
}
