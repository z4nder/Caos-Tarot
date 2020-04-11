import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes'

export default StyleSheet.create({
  image: {    
    borderRadius: 10,
    width: 250, 
    height: 450
  },
  container: {  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.grey,
  },
  cardContainer: {
    borderRadius: 10,
    width: 250, 
    height: 450
  },
  card: {
    borderRadius: 10,
    width: 250, 
    height: 450,
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
