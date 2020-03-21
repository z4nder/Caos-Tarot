import React, { Component } from 'react';
import Card from '../../../components/Card'
import {View} from 'react-native';

// import { Container } from './styles';

class ThreeCards extends Component {
    constructor(props) { 
        super(props);         
        this.state = {
            images: [],
            isLoading: true
        };
    }   

    async componentDidMount(){
        await this.getImagesArr()
    }

    renderCards() { 
      let items = []      
      this.state.images.map((item)=>{      
        items.push(
          <Card 
                      src={this.state.images[0].src}
          />
        );
      })        
            
      return items;	
	  }	

    getImagesArr() {
        this.setState(
            {images: 
            [
                {title: "Louco", src:require('../../../assets/CaosTarot/00.png')}, 
                {title: "Test", src:require('../../../assets/CaosTarot/06.png')}
            ], 
            isLoading: false
        })
    }
    
    render (){
        return(
            this.state.isLoading
            ? <View></View>   
            : this.renderCards()
           
        )      
   }
}

export default OneCard

