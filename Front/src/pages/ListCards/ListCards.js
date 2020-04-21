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
    alignItems: 'stretch',
    backgroundColor: Colors.grey
    //padding: 0
  },
  clickContent: {
    marginTop: 15,
    width: 200, 
    height: 300,
  },
  grid: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  gridItem: {
    margin:5,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});