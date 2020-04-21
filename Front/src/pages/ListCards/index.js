import React, { Component } from 'react';
import Card from '../../components/Card'
import { View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Bars } from 'react-native-loader';

// Styles
import styles from "./ListCards";
class ListCards extends Component {
    constructor() {
        super()
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
        let items = []
        for (let index = 0; index < 22; index++) {
            let content = {}
           
            content.id = index
            content.cardPosition = index
            content.showCard = false

            items.push(content)
        }
        this.setState({
            isLoading: false,
            cardsData: items,
        })
    }

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
                                contentContainerStyle={{alignSelf: 'flex-start'}}
                                numColumns={this.state.cardsData.length / 2}
                                // showsVerticalScrollIndicator={false}
                                // showsHorizontalScrollIndicator={false}
                                data={this.state.cardsData}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        style={styles.clickContent}
                                    >
                                        <Card
                                            number={item.cardPosition}
                                            showCard={true}
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

export default ListCards

