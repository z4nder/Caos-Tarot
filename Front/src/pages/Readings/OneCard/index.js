import React, { Component } from 'react';
import Card from '../../../components/Card'
import {View} from 'react-native';
import { Bars } from 'react-native-loader';
import cards_info from '../../../assets/cards_info.json'

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
        let items = 
            <Card 
                images={this.state.images}
            />
		return items;	
	}	

    async getImagesArr(type) {
        try {
            let data = await this.addImagesSrc()
            this.setState({
                images: data, 
                isLoading: false
            })
        } catch (error) {
            console.log("Get Cards Image Error", error)
        }        
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

   async addImagesSrc() {
    try {   
        cards_info[0].src = require("../../../assets/BlueFluke/00.jpg")
        cards_info[1].src = require("../../../assets/BlueFluke/01.jpg")
        cards_info[2].src = require("../../../assets/BlueFluke/02.jpg")
        cards_info[3].src = require("../../../assets/BlueFluke/03.jpg")
        cards_info[4].src = require("../../../assets/BlueFluke/04.jpg")
        cards_info[5].src = require("../../../assets/BlueFluke/05.jpg")
        cards_info[6].src = require("../../../assets/BlueFluke/06.jpg")
        cards_info[7].src = require("../../../assets/BlueFluke/07.jpg")
        cards_info[8].src = require("../../../assets/BlueFluke/08.jpg")
        cards_info[9].src = require("../../../assets/BlueFluke/09.jpg")
        cards_info[10].src = require("../../../assets/BlueFluke/10.jpg")
        cards_info[11].src = require("../../../assets/BlueFluke/11.jpg")
        cards_info[12].src = require("../../../assets/BlueFluke/12.jpg")
        cards_info[13].src = require("../../../assets/BlueFluke/13.jpg")
        cards_info[14].src = require("../../../assets/BlueFluke/14.jpg")
        cards_info[15].src = require("../../../assets/BlueFluke/15.jpg")
        cards_info[16].src = require("../../../assets/BlueFluke/16.jpg")
        cards_info[17].src = require("../../../assets/BlueFluke/17.jpg")
        cards_info[18].src = require("../../../assets/BlueFluke/18.jpg")
        cards_info[19].src = require("../../../assets/BlueFluke/19.jpg")
        cards_info[20].src = require("../../../assets/BlueFluke/20.jpg")
        cards_info[21].src = require("../../../assets/BlueFluke/21.jpg")

       return cards_info
    } catch (error) {
        console.log("Get Cards Image Error", error)
    }        
}
}

export default OneCard

