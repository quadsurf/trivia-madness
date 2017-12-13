

import { ACTIVATE_QUESTION } from './Types'

const activateQuestion = payload => {
  return {
    type: ACTIVATE_QUESTION,
    payload
  }
}

export default activateQuestion
