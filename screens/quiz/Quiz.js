

import React, { Component } from 'react'
import { View,Text,Button,ActivityIndicator } from 'react-native'

// LIBS
import { connect } from 'react-redux'
import { DotsLoader,PulseLoader } from 'react-native-indicator'

// COMPONENTS
import SwipeDeck from './SwipeDeck'

// LOCALS
import { Colors,Views,Texts } from '../../common/Styles'
import SwipeDeckStyles from './SwipeDeckStyles'
import { truncate } from '../../common/Utils'

// STORE
import fetchQuestions from '../../store/actions/FetchQuestionsAction'
import setGameMode from '../../store/actions/SetGameModeAction'

class Quiz extends Component {

  state = {
    gameMode: this.props.gameMode,
    questionQuantity: 10,
    activateQuestion: {}
  }

  componentWillMount(){
    this.props.fetchQuestions(this.state.questionQuantity,'easy')
      .then( () => {
        this.props.setGameMode('isPlaying')
      })
  }

  componentWillReceiveProps(newProps){
    if (newProps) {
      if (newProps.gameMode) {
        setTimeout(()=>{
          this.setState({ gameMode:newProps.gameMode })
        },1000)
      }
      if (
        newProps.activeQuestion &&
        newProps.activeQuestion.category &&
        newProps.activeQuestion !== this.state.activeQuestion
      ) {
        this.setState({activeQuestion:newProps.activeQuestion},()=>{
          this.updateHeaderTitle(this.state.activeQuestion.category)
        })
      }
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    if (state && state.params && state.params.title) {
      return {
        title: state.params.title
      }
    } else {
      return {
        title: 'Loading...'
      }
    }
  }

  updateHeaderTitle(title){
   this.props.navigation.setParams({ title: truncate(title,22) })
  }

  goToResults(){
    setTimeout(()=>{
      this.props.navigation.navigate('results')
    },2500)
  }

  renderQuizCards(){
    if (this.state.gameMode === 'isPlaying') {
      return <SwipeDeck questions={this.props.questions} />
    } else if (this.state.gameMode === 'isOver') {
        this.goToResults()
        return (
          <View style={Views.container}>
            <PulseLoader
              size={45}
              color={Colors.blue}
              frequency={1000}/>
            <Text style={Texts.bodyText}>
              Tallying Score...
            </Text>
          </View>
        )
    } else {
      return (
        <View style={Views.container}>
          <DotsLoader
            size={15}
            color={Colors.blue}
            frequency={5000}/>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={Views.container}>
        <View style={SwipeDeckStyles.cardContainer}>
          {this.renderQuizCards()}
        </View>
        <Text style={Texts.headerText}>
          {
            this.state.activeQuestion && this.state.activeQuestion.id && this.state.gameMode === 'isPlaying' ?
            `${this.state.activeQuestion.id} of ${this.state.questionQuantity}` : null
          }
        </Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    gameMode: state.gameMode,
    activeQuestion: state.activeQuestion
  }
}

export default connect(mapStateToProps,{fetchQuestions,setGameMode})(Quiz)
