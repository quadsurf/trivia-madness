

// LIBS
import axios from 'axios'

// LOCALS
import { FETCH_QUESTIONS } from './Types'

const BASE_URL = 'https://opentdb.com/api.php?type=boolean'

const fetchQuestions = (amount=10,difficulty='hard') => {

  const URL = `${BASE_URL}&amount=${amount}&difficulty=${difficulty}`
  const request = axios.get(URL)

  return {
    type: FETCH_QUESTIONS,
    payload: request
  }

}

export default fetchQuestions
