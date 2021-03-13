import { StyleSheet } from "react-native";
import { Fonts, Colors } from '../../Themes'

export default StyleSheet.create({ 
  container: {      
    // backgroundColor: 'red'
  },
  selectPicker: {      
    height: 50,
    width: 200
  },
  content: {   
    flex: 1,
    flexDirection: 'row',
    //Vertical Align
    justifyContent: 'center',
    //Horizontal Align
    alignItems: 'center',
    backgroundColor: Colors.grey,
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
    height: '80%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },  
});