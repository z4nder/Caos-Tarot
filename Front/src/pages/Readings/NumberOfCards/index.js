import React, { Component } from 'react';
import Card from '../../../components/Card'
import {View, TouchableOpacity, ScrollView, Text, TextInput, Alert} from 'react-native';
import { Bars } from 'react-native-loader';
import FullButton from '../../../components/FullButton'

// Styles
import styles from "./NumberOfCards.style";
class NumberOfCards extends Component {
    constructor(props) { 
        super(props);         
        this.state = {
            cardQuantity: 0,
            valid:{
                cardQuantity: false
            } 
        };
    }   

    async componentDidMount(){
    }

    redirectToDrawnCard(){
        if(this.cardQuantityValidate())  this.props.navigation.navigate('DrawnCards', {cardQuantity: this.state.cardQuantity})      
    }

    cardQuantityValidate(){
        if(this.state.cardQuantity == 0){
            Alert.alert(
                'Quantidade de Cartas',
                'Selecione o número de cartas'
            );
            return false;
        }else if(this.state.cardQuantity > 22){
            Alert.alert(
                'Quantidade de Cartas',
                'O número máximo de cartas permitidas é 22'
            );
            return false;
        }
        return true;
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
                        {this.state.valid.cardQuantity
                        ?
                            <FullButton
                                text='Tirar cartas'
                                disable={false}
                                onPress={() => this.redirectToDrawnCard()}
                            />
                        :
                            <FullButton
                                text='Tirar cartas'
                                disable={true}
                                onPress={() => this.redirectToDrawnCard()}
                            />
                        }
                    </View>
                </View>               
            </View> 
            
           
        )      
   }

}

export default NumberOfCards

