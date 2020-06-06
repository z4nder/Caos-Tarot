import React, { Component } from 'react';
import Card from '../../../components/Card'
import { View, TouchableOpacity, ScrollView, Button, FlatList } from 'react-native';
import { Bars } from 'react-native-loader';
import Carousel from 'react-native-snap-carousel';

import { scrollInterpolator, animatedStyles } from '../../../animates/carouselAnimate';

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
   
    isEquals(items, newNumber) {     
        let equals = false
        for (let index = 0; index < items.length; index++) {
            if(items[index].cardPosition == newNumber) equals = true         
        }       
        return equals  
    }  

    renderCarousel = ({item, index}) => {
        return (           
            <TouchableOpacity
                style={styles.clickContent}              
            >
                <Card
                    number={item.cardPosition}
                    showCard={false}
                />
            </TouchableOpacity>
                           
        );
    }

    render() {
        return (
            <View style={styles.container}>                
                <View style={styles.content}>
                    {this.state.isLoading
                        ?
                        <Bars size={10} color="#111110" />

                        :
                        <View >                            
                           <Carousel
                                ref={(c) => { this._carousel = c; }}
                                data={this.state.cardsData}
                                renderItem={this.renderCarousel}
                                sliderWidth={500}
                                itemWidth={350}
                                useScrollView={true}

                                scrollInterpolator={scrollInterpolator}
                                slideInterpolatedStyle={animatedStyles}
                            />     
                        </View>
                    }
                </View>
            </View>


        )
    }

}

export default DrawnCards

