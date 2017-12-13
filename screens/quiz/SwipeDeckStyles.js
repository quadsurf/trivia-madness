

// LOCALS
import { Colors } from '../../common/Styles'

const SwipeDeckStyles = {
  cardContainer: {
    width: 300,
    height: 240,
    position: 'relative'
  },
  card: {
    width: 300, height: 240,
    borderRadius: 12,
    backgroundColor: Colors.pink,
    position: 'absolute',
    top: -80,
    left: -20,
    borderWidth: 1,
    borderColor: Colors.white,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width:10,height:10},
    shadowOpacity: .3,
    shadowRadius: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: Colors.transparentWhite,
    backgroundColor: 'transparent'
  },
  label: {
    backgroundColor: Colors.purple,
    color: Colors.transparentWhite
  },
  leftWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 0,
    marginLeft: 60
  },
  rightWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 0,
    marginLeft: -180
  }
}

export default SwipeDeckStyles
