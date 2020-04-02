import { StyleSheet } from "react-native";
import { Fonts, Colors } from '../../../Themes'

export default StyleSheet.create({ 
  container: {
    flex: 1,   
    backgroundColor: Colors.grey
  },
  inputArea: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  inputLabel: {
   paddingRight: 10
  },
  numberInput: {
    borderRadius: 10,
    padding: 10,
    height: 40,
    width: 60,
    borderColor: 'gray', 
    borderWidth: 2
  }
});