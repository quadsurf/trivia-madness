

import { ANSWER_QUESTION } from './Types'

const answerQuestion = payload => {
  return {
    type: ANSWER_QUESTION,
    payload
  }
}

export default answerQuestion
