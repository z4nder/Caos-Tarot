import { StyleSheet } from "react-native";
import { Fonts, Colors } from '../../Themes'

export default StyleSheet.create({ 
  container: {
    flex: 1,
    flexDirection: 'row',
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
  clickContent: {
    margin: 10,
  }  
});