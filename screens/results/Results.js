

import React, { Component } from 'react'
import { View,Text,FlatList } from 'react-native'

// LIBS
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import call from 'react-native-phone-call'

// COMPONENTS
import Footer from '../../common/Footer'
import QuestionsListItem from './QuestionsListItem'
import CustomHeaderTitle from '../../common/CustomHeaderTitle'

// LOCALS
import { Views,Texts } from '../../common/Styles'

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'home'})
  ]
})

class Results extends Component {

  componentWillMount(){
    let correctAnswers = 0
    this.props.answeredQuestions.forEach( question => {
      if (question.userAnswer === question.correctAnswer) {
        correctAnswers++
      }
    })
    let score = `${correctAnswers} / ${this.props.answeredQuestions.length}`
    this.updateHeaderTitle(score)
  }

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    if (state && state.params && state.params.title) {
      return {
        title: <CustomHeaderTitle title="You scored" subTitle={state.params.title} />
      }
    } else {
      return {
        title: 'Loading...'
      }
    }
  }

  updateHeaderTitle(title){
   this.props.navigation.setParams({ title })
  }

  startOver(){
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return (
      <View style={Views.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={this.props.answeredQuestions}
          renderItem={({item}) => <QuestionsListItem question={item} />}
          style={Views.flatListView}/>
        <Footer textA="Play Again?" textB="Hire Chris Castro"
          onPressA={() => this.startOver()}
          onPressB={() => call({number:'805-444-2422',prompt:false})} />
      </View>
    )
  }

}

const mapStateToProps = state => {
  return {
    answeredQuestions: state.answeredQuestions
  }
}

export default connect(mapStateToProps)(Results)
