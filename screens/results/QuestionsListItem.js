

import React from 'react'
import { View,Text } from 'react-native'

// LIBS
import { MaterialCommunityIcons } from '@expo/vector-icons'

// LOCALS
import QuestionStyles from './QuestionStyles'

const QuestionsListItem = ({ question: { correctAnswer,userAnswer,question } }) => {
  let correct = correctAnswer === userAnswer
  let { questionContainer,questionCellLeft,questionIcon,questionCellRight,questionCorrect,questionWrong } = QuestionStyles
  return (
    <View style={questionContainer}>
      <View style={questionCellLeft}>
        <MaterialCommunityIcons name={ correct ? 'plus' : 'minus' } style={questionIcon}/>
      </View>
      <View style={questionCellRight}>
        <Text style={ correct ? questionCorrect : questionWrong }>
          {question}
        </Text>
      </View>
    </View>
  )
}

export default QuestionsListItem
