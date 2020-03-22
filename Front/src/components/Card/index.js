import React, { Component } from 'react';
import {View, Image, Text} from 'react-native';
// Styles
import styles from "./card.style";

class Card extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      image: props.images[22].src,
    }
  }
  componentDidMount(){
   
  } 

  async componentWillReceiveProps(newProps) {
    const oldProps = this.props   
    if(oldProps.number != newProps.number){
      this.setState({
        image: this.props.images[this.props.number].src,
      })
    }
  }

  render() { 
    console.log(this.state.image)
    return (
      <View>
         <Image 
            style={styles.image}
            source={this.state.image}
          /> 
      </View>
    );
  }
}
  

export default Card;