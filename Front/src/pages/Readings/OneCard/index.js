import React, { Component } from 'react';
import Card from '../../../components/Card'
import {View} from 'react-native';
import { Bars } from 'react-native-loader';

// Styles
import styles from "./OneCard.style";
class OneCard extends Component {
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
		// this.state.images.map((item)=>{      
		// 	items.push(
		// 		<Card 
        //             src={this.state.images[0].src}
		// 		/>
		// 	);
        // })
        let items = 
            <Card 
                images={this.state.images}
            />
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
            <View  style={styles.container}>
                <View style={styles.content}>
                {this.state.isLoading
                ?
                <Bars size={10} color="#111110"/>
                    
                :                
                this.renderCards()}
                </View>
            </View> 
            
           
        )      
   }
}

export default OneCard

