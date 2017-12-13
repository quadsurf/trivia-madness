

import { SET_GAME_MODE } from './Types'

const setGameMode = payload => {
  return {
    type: SET_GAME_MODE,
    payload
  }
}

export default setGameMode
