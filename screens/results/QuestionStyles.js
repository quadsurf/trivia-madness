

// LOCALS
import { Colors,width } from '../../common/Styles'

const QuestionStyles = {
  questionContainer: {
    width: width*.92,
    marginVertical: 12,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  questionCellLeft: {
    width: width*.12
  },
  questionCellRight: {
    width: width*.8
  },
  questionIcon: {
    fontSize: 30,
    color: Colors.transparentWhite
  },
  questionCorrect: {
    fontSize: 30,
    color: Colors.transparentWhite,
    fontWeight: 'bold'
  },
  questionWrong: {
    fontSize: 30,
    color: Colors.transparentWhite
  }
}

export default QuestionStyles
