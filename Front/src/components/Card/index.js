import React, { Component } from 'react';
import {View, Image, Text} from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      image: "",
    }
  }
  render() {
    
    return (
      <View>
         <Image
            style={{width: 320, height: 450}}
            source={this.props.images[0].src}
          /> 
      </View>
    );
  }
}
  

export default Card;