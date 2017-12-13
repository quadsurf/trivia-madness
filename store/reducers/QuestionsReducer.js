

import { FETCH_QUESTIONS,RESET_STORE } from '../actions/Types'

const INITIAL_STATE = []

export default (state = INITIAL_STATE,action) => {
  let results = []
  if (
    action &&
    action.payload &&
    action.payload.data &&
    action.payload.data.results
  ) {
    action.payload.data.results.forEach( (res,i) => {
      let obj = {
        ...res,
        id: i+1
      }
      results.push(obj)
    })
  }
  switch (action.type) {
    case FETCH_QUESTIONS:
      return results
    case RESET_STORE:
      return []
    default:
      return state
  }
}
