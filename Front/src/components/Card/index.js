import React, { Component } from 'react';
import {View, Image, Text} from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      image: "",
    }
  }
  componentDidMount(){
    console.log("Props", this.props.images[3].src)
  }
  render() {
    
    return (
      <View>
         <Image
            style={{width: 250, height: 450}}
            source={this.props.images[2].src}
          /> 
      </View>
    );
  }
}
  

export default Card;