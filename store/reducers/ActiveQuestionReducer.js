

import { ACTIVATE_QUESTION,RESET_STORE } from '../actions/Types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE,action) => {
  switch(action.type){
    case ACTIVATE_QUESTION:
      return action.payload || state
    case RESET_STORE:
      return {}
    default:
      return state
  }
}
