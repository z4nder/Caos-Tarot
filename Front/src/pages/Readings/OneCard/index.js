import React, { Component } from 'react';
import Card from '../../../components/Card'
import {View, TouchableOpacity, ScrollView, Text, TextInput} from 'react-native';
import { Bars } from 'react-native-loader';
import FullButton from '../../../components/FullButton'

// Styles
import styles from "./OneCard.style";
class OneCard extends Component {
    constructor(props) { 
        super(props);         
        this.state = {
            isLoading: false,
            cardSelected: [],
            cardQuantity: 0,
            showCard: []
        };
    }   

    async componentDidMount(){
    }

    renderCards() { 
        let items = []        
        for (let index = 0; index < this.state.cardQuantity; index++) {
            let randomNumber = this.getRandomArbitrary(21)
            items.push(
                <TouchableOpacity 
                    style={styles.clickContent}
                    onPress={() => this.drawnCard(index)}
                >
                    <Card 
                        number={randomNumber}
                        showCard={this.state.showCard[index]}
                    />
                </TouchableOpacity>  
            )          
        }      
        
		return items;	
	}	    

    drawnCard(index) {        
        let show = this.state.showCard
        show[index] = true
        this.setState({
            showCard: show
        })
    }

    getRandomArbitrary(max) {
        return Math.floor(Math.random() * max);
    }

    render (){
        return(
            <View  style={styles.container}>
                
                <View style={styles.content}>
                {this.state.isLoading
                ?
                    <Bars size={10} color="#111110"/>
                    
                :   
                    <ScrollView horizontal={true}>          
                        {this.renderCards()}
                    </ScrollView>
                }
                </View>

                <View style={styles.button}>
                    <Text>Numero de cartas</Text>
                    <TextInput
                        style={styles.numberInput}
                        onChangeText={cardQuantity => this.setState({ cardQuantity })}
                        value={this.state.cardQuantity}
                    />
                    {/* <FullButton
                        text='Fazer tiragem'
                        onPress={() => this.drawnCard()}
                    /> */}
                </View>
            </View> 
            
           
        )      
   }

}

export default OneCard

