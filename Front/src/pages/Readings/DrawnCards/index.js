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
            items: []
        };
    }

    async componentDidMount() {

    }

    async componentWillMount() {
        this.renderCards()
    }

    renderCards() {
        let items =  []        
        for (let index = 0; index < this.props.route.params.cardQuantity; index++) {
            let content =  {}
            content.id = index
            content.cardPosition = this.getRandomArbitrary(21) 
            content.showCard = false    

            items.push(content)
        }
        console.log("items", items);
        this.setState({
            isLoading: false,
            cardsData: items,
        })   
    }
   
    drawnCard(index) {
        let content = this.state.cardsData
        console.log("this.state.cardsData", this.state.cardsData);        
        content[index].cardFliped = true
        this.setState({
            cardsData: content,
        })       
    }

    getRandomArbitrary(max) {
        return Math.floor(Math.random() * max);
    }

    // haveEqualsValue(newNumber) {
    //     for (let index = 0; index < this.state.cardQuantity.length; index++) {
    //         if(this.state.cardQuantity[index] == newNumber) return true         
    //     }
    //     return false
    //  }    

    //  getRandomArbitrary(max) {        
    //      let equals = false
    //      let number = null
    //      do {
    //          number = Math.floor(Math.random() * max)
    //          equals = this.haveEqualsValue(number)
    //      } while (!equals);

    //      return number;
    //  }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.content}>
                    {this.state.isLoading
                        ?
                        <Bars size={10} color="#111110" />

                        :
                        <ScrollView horizontal={true}>                            
                                <FlatList
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
                                    keyExtractor={item => item.id}
                                />
                        </ScrollView>
                    }
                </View>
            </View>


        )
    }

}

export default DrawnCards

