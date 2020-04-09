import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.darkGrey,
    borderRadius: 15   
  },
  buttonText: {
    margin: 13,
    textAlign: 'center',
    color: Colors.white   
  },
  buttonDisable: {
    backgroundColor: "#f4f5f7",
    color: Colors.darkGrey,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.darkGrey
  },
  buttonText: {
    margin: 13,
    textAlign: 'center',
    color: Colors.white
  },
})
