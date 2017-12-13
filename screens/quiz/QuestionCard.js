

import React from 'react'
import { View,Text } from 'react-native'

// LIBS
import entities from 'entities'

// LOCALS
import SwipeDeckStyles from './SwipeDeckStyles'

const { card,text } = SwipeDeckStyles

const QuestionCard = ({question}) => {
  return (
    <View style={card}>
      <Text style={text}>{entities.decodeHTML(question.question)}</Text>
    </View>
  )
}

export default QuestionCard
