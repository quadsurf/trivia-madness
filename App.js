

import React, { Component } from 'react'
import { View } from 'react-native'

// LIBS
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import resolver from "redux-promise"

// COMPONENTS
import RootNav from './nav/RootNav'
import StatusBar from './common/StatusBar'

// LOCALS
import RootReducer from './store/reducers'
import { Views } from './common/Styles'

console.disableYellowBox = true

const store = applyMiddleware(resolver)(createStore)

export default class App extends Component {
  render() {
    return (
      <Provider store={store(RootReducer)}>
        <View style={Views.container}>
          <StatusBar hidden={true} />
          <RootNav />
        </View>
      </Provider>
    )
  }
}
