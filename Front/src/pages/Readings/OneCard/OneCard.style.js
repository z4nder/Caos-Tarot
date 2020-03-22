import { StyleSheet } from "react-native";
import { Fonts, Colors } from '../../../Themes'

export default StyleSheet.create({ 
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red'
  },
  content: {
    flex: 6,
    flexDirection: 'column',
    //Vertical Align
    justifyContent: 'center',
    //Horizontal Align
    alignItems: 'center',

    backgroundColor: Colors.grey
    //padding: 0
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey
  },
});