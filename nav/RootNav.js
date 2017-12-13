

import React from 'react'

// LIBS
import { StackNavigator } from 'react-navigation'

// SCREENS
import Home from '../screens/home/Home'
import Quiz from '../screens/quiz/Quiz'
import Results from '../screens/results/Results'

// LOCALS
import { Views,Texts } from '../common/Styles'
import CustomHeaderTitle from '../common/CustomHeaderTitle'

// ROOT NAVIGATOR
const RootStack = StackNavigator(
  {
    home: {
      screen: Home,
      navigationOptions: {
        title: <CustomHeaderTitle title="Welcome to the" subTitle="Trivia Challenge" />,
      headerStyle: Views.headerView,
        headerTitleStyle: Texts.headerText
      }
    },
    quiz: {
      screen: Quiz,
      navigationOptions: {
        headerLeft: null,
        headerStyle: Views.headerView,
        headerTitleStyle: Texts.headerText
      }
    },
    results: {
      screen: Results,
      navigationOptions: {
        headerLeft: null,
        headerStyle: Views.headerView,
        headerTitleStyle: Texts.headerText
      }
    }
  },
  {
    initialRouteName: 'home'
  }
)

export default RootNav = () => <RootStack />
