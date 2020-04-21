import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes'

export default StyleSheet.create({
  image: {    
    borderRadius: 10,
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },  
  cardContainer: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
   
  },
  card: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    borderRadius: 10,
    backgroundColor:Colors.grey,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  }
})
