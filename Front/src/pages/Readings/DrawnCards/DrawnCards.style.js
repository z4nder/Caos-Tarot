import { StyleSheet } from "react-native";
import { Fonts, Colors } from '../../../Themes'

export default StyleSheet.create({ 
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    //Vertical Align
    justifyContent: 'center',
    //Horizontal Align
    alignItems: 'center',
    backgroundColor: Colors.grey
    //padding: 0
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey
  },
  clickContent: {
    width: '100%', 
    height: '95%',
    margin: 10
  },
  numberInput: {
    padding: 10,
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1
  }
});