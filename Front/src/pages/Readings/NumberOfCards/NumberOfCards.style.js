import { StyleSheet } from "react-native";
import { Fonts, Colors } from '../../../Themes'

export default StyleSheet.create({ 
  container: {
    flex: 1,   
    backgroundColor: Colors.grey
    
  },
  header: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 80,   
  },
  inputHeader: {
    fontSize: 20,
  },
  inputArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  content: {
    flex: 6,    
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