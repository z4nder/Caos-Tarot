import React, { Component } from 'react';
import Card from '../../../components/Card'
import { View, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Bars } from 'react-native-loader';
import FullButton from '../../../components/FullButton'

// Styles
import styles from "./DrawnCards.style";
class DrawnCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            cardsData: [],           
            cardQuantity: 0,
            items: [],
        };
    }

    async componentDidMount() {
      console.log("scrollViewRef", scrollViewRef);
        
      this.scrollViewRef.scrollToOffset({ offset: 4,  animated: false })
    }

  
    async componentWillMount() {
        this.renderCards()            
    }

    async renderCards() {
        let items =  []         
        for (let index = 0; index < this.props.route.params.cardQuantity; index++) {
            let content =  {}
            let randomNumber = null      
            content.id = index
            do {
                randomNumber = Math.floor(Math.random() * 22)                
            } while(this.isEquals(items, randomNumber));     
            content.cardPosition =  randomNumber    
            content.showCard = false    

            items.push(content)
        }
        this.setState({
            isLoading: false,
            cardsData: items,
        })   
    }
   
    drawnCard(index) {
        let content = this.state.cardsData 
        content[index].cardFliped = true
        this.setState({
            cardsData: content,
        })       
    }

    isEquals(items, newNumber) {     
        let equals = false
        for (let index = 0; index < items.length; index++) {
            if(items[index].cardPosition == newNumber) equals = true         
        }       
        return equals  
    }  

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.content}>
                    {this.state.isLoading
                        ?
                        <Bars size={10} color="#111110" />

                        :
                        <ScrollView 
                            horizontal={true}
                        >                            
                                <FlatList
                                    ref={(ref) => { this.list = ref; }}

                                    horizontal={true}
                                    data={this.state.cardsData}
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity
                                            style={styles.clickContent}
                                            onPress={() => this.drawnCard(index)}
                                        >
                                            <Card
                                                number={item.cardPosition}
                                                showCard={item.cardFliped}
                                            />
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={(item, index) => `card-i.${index}-item.${item.cardPosition}`}
                                />
                        </ScrollView>
                    }
                </View>
            </View>


        )
    }

}

export default DrawnCards

