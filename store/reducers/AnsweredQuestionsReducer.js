

import { ANSWER_QUESTION,RESET_STORE } from '../actions/Types'

const INITIAL_STATE = []

export default (state = INITIAL_STATE,action) => {
  switch(action.type){
    case ANSWER_QUESTION:
      return [...state,action.payload]
    case RESET_STORE:
      return []
    default:
      return state
  }
}
