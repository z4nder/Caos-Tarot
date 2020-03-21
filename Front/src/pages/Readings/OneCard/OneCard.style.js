import { StyleSheet } from "react-native";
import {
  BootstrapColors
} from '../../../Themes'

export default StyleSheet.create({ 
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red'
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    //Vertical Align
    justifyContent: 'center',
    //Horizontal Align
    alignItems: 'center',
    
    backgroundColor: 'green'
    //padding: 0
  },
});