import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes'

export default StyleSheet.create({
  image: {    
    borderRadius: 10,
    width: 300, 
    height: 550
  },
  container: {  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.grey,
    paddingBottom: 50
  },
  cardContainer: {
    borderRadius: 10,
    width: 300, 
    height: 550
  },
  card: {
    borderRadius: 10,
    width: 300, 
    height: 550,
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
