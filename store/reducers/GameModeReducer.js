

import { SET_GAME_MODE,RESET_STORE } from '../actions/Types'

const INITIAL_STATE = 'lobby'

export default (state = INITIAL_STATE,action) => {
  switch(action.type){
    case SET_GAME_MODE:
      return action.payload
    case RESET_STORE:
      return 'lobby'
    default:
      return state
  }
}
