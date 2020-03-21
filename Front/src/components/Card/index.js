import React, { Component } from 'react';
import {View, Image, Text} from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);   
    console.log("props", props.images) 
    this.state = {
      image: "",
    }
  }
  async componentDidMount(){
    console.log("Mount", this.props) 
  }
  render() {
    
    return (
      <View>
        <Text>PEDRO</Text>
         <Image
            style={{width: 300, height: 300}}
            source={this.props.images[0].src}
          /> 
      </View>
    );
  }
}
  

export default Card;