

import { combineReducers } from 'redux'
import QuestionsReducer from './QuestionsReducer'
import GameModeReducer from './GameModeReducer'
import ActiveQuestionReducer from './ActiveQuestionReducer'
import AnsweredQuestionsReducer from './AnsweredQuestionsReducer'

const RootReducer = combineReducers({
  questions: QuestionsReducer,
  gameMode: GameModeReducer,
  activeQuestion: ActiveQuestionReducer,
  answeredQuestions: AnsweredQuestionsReducer
})

export default RootReducer
