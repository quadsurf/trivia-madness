

import { Dimensions } from 'react-native'

const { width,height } = Dimensions.get('window')

const purple = '#371A85'
const blue = '#6EFAFD'
const pink = '#ff4081'
const white = '#fff'
const offWhite = '#fefefe'
const transparentWhite = 'rgba(255,255,255,.3)'
const green = '#4caf50'
const red = '#EC174F'

const Colors = {
  purple,blue,pink,white,offWhite,transparentWhite,green,red,
  bgColor: purple
}

const Views = {
  container: {
    flex: 1,
    backgroundColor: purple,
    alignItems: 'center',
    justifyContent: 'center'
  },
  section: {
    width: width*.86,
    height: 140,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerView: {
    backgroundColor: purple,
    width,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0
  },
  footerContainer: {
    flexDirection: 'row',
    width,
    height: 100,
    position: 'absolute',
    bottom: 0
  },
  footerView: {
    flex: 3,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerDivider: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatListView: {
    marginBottom: 100
  }
}

const Texts = {
  headerText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 30,
    color: blue,
    paddingHorizontal: 12
  },
  bodyText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 30,
    color: transparentWhite
  },
  footerText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 26,
    color: blue
  }
}

export { Colors,Views,Texts,width,height }
