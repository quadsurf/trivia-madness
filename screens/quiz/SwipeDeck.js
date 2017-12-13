

import React, { Component} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

// LIBS
import { connect } from 'react-redux'
import Swiper from 'react-native-deck-swiper'
import entities from 'entities'

// COMPONENTS
import QuestionCard from './QuestionCard'

// LOCALS
import { Colors,Views } from '../../common/Styles'
import SwipeDeckStyles from './SwipeDeckStyles'

// STORE
import activateQuestion from '../../store/actions/ActivateQuestionAction'
import setGameMode from '../../store/actions/SetGameModeAction'
import answerQuestion from '../../store/actions/AnswerQuestionAction'

class SwipeDeck extends Component {

  state = {
    cards: this.props.questions,
    swipedAllCards: false,
    cardIndex: 0
  }

  componentWillMount(){
    this.activateQuestion(this.props.questions[0])
  }

  activateQuestion(card){
    this.props.activateQuestion(card)
  }

  onSwiped(direction){
    let prevCardIndex = this.state.cardIndex
    let cardIndex = this.state.cardIndex + 1
    this.setState({cardIndex},()=>{
      this.activateQuestion(this.props.questions[this.state.cardIndex])
    })
    let question = this.props.questions[prevCardIndex]
    let completedQuestion = {
      id: question.id,
      correctAnswer: question.correct_answer,
      userAnswer: direction === 'left' ? 'False' : 'True',
      question: entities.decodeHTML(question.question)
    }
    this.props.answerQuestion(completedQuestion)
  }

  onSwipedAllCards = () => this.props.setGameMode('isOver')

  render(){
    let { label,leftWrapper,rightWrapper } = SwipeDeckStyles
    return (
      <Swiper
        ref={swiper => this.swiper = swiper}
        backgroundColor="transparent"
        verticalSwipe={false}
        disableBottomSwipe={true}
        disableTopSwipe={true}
        cards={this.state.cards}
        cardIndex={this.state.cardIndex}
        cardVerticalMargin={0}
        renderCard={(card) => card ? <QuestionCard key={card.id} question={card} /> : null}
        onSwipedLeft={() => this.onSwiped('left')}
        onSwipedRight={() => this.onSwiped('right')}
        onSwipedAll={this.onSwipedAllCards}
        overlayLabels={{
          left: {
            title: 'false',
            style: {
              label,
              wrapper: leftWrapper
            }
          },
          right: {
            title: 'true',
            style: {
              label,
              wrapper: rightWrapper
            }
          }
        }}
        animateOverlayLabelsOpacity
        animateCardOpacity
      />
    )
  }

}

export default connect(null,{activateQuestion,setGameMode,answerQuestion})(SwipeDeck)
