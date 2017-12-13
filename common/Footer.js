

import React from 'react'
import { TouchableHighlight,View,Text,Image } from 'react-native'

// LOCALS
import { Colors,Views,Texts } from '../common/Styles'

const Footer = ({ textA,textB,onPressA,onPressB }) => {
  if (textB) {
    return (
      <View style={Views.footerContainer}>
        <TouchableHighlight
          onPress={onPressB}
          style={[Views.footerView,{borderTopRightRadius:12}]}
          underlayColor={Colors.transparentWhite}>
          <Text style={Texts.footerText}>
            {textB}
          </Text>
        </TouchableHighlight>
        <View style={Views.footerDivider}>
          <Image source={require('../assets/or.png')} />
        </View>
        <TouchableHighlight
          onPress={onPressA}
          style={[Views.footerView,{borderTopLeftRadius:12}]}
          underlayColor={Colors.transparentWhite}>
          <Text style={Texts.footerText}>
            {textA}
          </Text>
        </TouchableHighlight>
      </View>
    )
  } else {
    return (
      <View style={Views.footerContainer}>
        <TouchableHighlight
          onPress={onPressA}
          style={Views.footerView}
          underlayColor={Colors.transparentWhite}>
          <Text style={Texts.footerText}>
            {textA}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Footer
