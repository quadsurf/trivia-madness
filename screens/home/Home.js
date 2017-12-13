

import React, { Component } from 'react'
import { View,Text,Button } from 'react-native'

// LIBS
import { connect } from 'react-redux'
import { DotsLoader } from 'react-native-indicator'

// COMPONENTS
import Footer from '../../common/Footer'

// STORE
import resetStore from '../../store/actions/ResetStoreAction'

// LOCALS
import { Colors,Views,Texts } from '../../common/Styles'

class Home extends Component {

  state = {
    gameMode: 'lobby'
  }

  initializeGame(){
    this.setState({gameMode:'initializing'},()=>{
      this.props.resetStore()
      setTimeout(()=>{
        this.props.navigation.navigate('quiz')
        this.setState({gameMode:'lobby'})
      },1500)
    })
  }

  renderLoading(){
    if (this.state.gameMode === 'initializing') {
      return (
        <View style={Views.section}>
          <DotsLoader
            size={15}
            color={Colors.blue}
            frequency={5000}/>
        </View>
      )
    } else {
      return (
        <View style={Views.container}>
          <View style={Views.section}>
            <Text style={Texts.bodyText}>
              {
                `You will be presented${"\n"}with 10 questions.${"\n"}${"\n"}Swipe Left for False.${"\n"}Swipe Right for True.${"\n"}${"\n"}${"\n"}${"\n"}${"\n"}Can you score 100%?`
              }
            </Text>
          </View>
          <Footer
            textA="BEGIN"
            onPressA={() => this.initializeGame()} />
        </View>
      )
    }
  }

  render(){
    return (
      <View style={Views.container}>
        {this.renderLoading()}
      </View>
    )
  }

}

export default connect(null,{resetStore})(Home)
