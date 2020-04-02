import React, { Component } from 'react';
import Card from '../../../components/Card'
import {View, TouchableOpacity, ScrollView, Text, TextInput} from 'react-native';
import { Bars } from 'react-native-loader';
import FullButton from '../../../components/FullButton'

// Styles
import styles from "./NumberOfCards.style";
class NumberOfCards extends Component {
    constructor(props) { 
        super(props);         
        this.state = {
            cardQuantity: 0,
        };
    }   

    async componentDidMount(){
        console.log("Mount", this.state.cardQuantity);        
    }

    redirectToDrawnCard(){
       console.log("Mount", this.cardQuantity);  
       this.props.navigation.navigate('DrawnCards', {cardQuantity: this.state.cardQuantity})
    }
    
   
    render (){
        return(
            <View  style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.inputArea}>
                        <Text style={styles.inputLabel }>Quantidade de cartas:</Text>
                        <TextInput
                            style={styles.numberInput}
                            onChangeText={value => this.setState({ cardQuantity: value })}
                            keyboardType={'numeric'}
                            maxLength={2}
                            value={this.state.cardQuantity}
                        />                   
                    </View>
                    <View style={styles.button}>
                        <FullButton
                            text='Tirar cartas'
                            onPress={() => this.redirectToDrawnCard()}
                        />
                    </View>
                </View>               
            </View> 
            
           
        )      
   }

}

export default NumberOfCards

