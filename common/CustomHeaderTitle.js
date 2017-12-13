

import React from 'react'
import { View,Text } from 'react-native'

import { Views,Texts } from './Styles'

const CustomHeaderTitle = (props) => {

  getCustomStyle = () => {
    if (!props.subTitle) {
      return {
        paddingBottom: 24
      }
    }
  }

  return (
    <View style={[Views.headerView,this.getCustomStyle()]}>
      <Text style={Texts.headerText}>{props.title}</Text>
      {
        props.subTitle ?
        <Text style={Texts.headerText}>{props.subTitle}</Text> : null
      }
    </View>
  )
}

export default CustomHeaderTitle
