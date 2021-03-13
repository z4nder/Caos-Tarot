import React, { Component } from "react";
import Card from "../../components/Card";
import { View, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { Bars } from "react-native-loader";

import { getSelectedDeck } from "../../services/selectedDeck";

// Styles
import styles from "./ListCards";
class ListCards extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      cardsData: [],
      cardQuantity: 0,
      items: [],
      selectDeckId: 0,
    };
  }

  async componentDidMount() {
    this._unsubscribe = await this.props.navigation.addListener(
      "focus",
      async () => {
        this.setState({ isLoading: true });
        await this.getDeckId();
        await this.renderCards();
      }
    );
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async renderCards() {
    let items = [];
    for (let index = 0; index < 22; index++) {
      let content = {};

      content.id = index;
      content.cardPosition = index;
      content.showCard = false;

      items.push(content);
    }
    this.setState({
      isLoading: false,
      cardsData: items,
    });
  }

  async getDeckId() {
    try {
      const result = await getSelectedDeck();
      this.setState({ selectDeckId: result.deck_id });
    } catch (error) {
      console.log("getDeckId error");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {this.state.isLoading ? (
            <Bars size={10} color="#111110" />
          ) : (
            <ScrollView horizontal={true}>
              <FlatList
                contentContainerStyle={{ alignSelf: "flex-start" }}
                numColumns={this.state.cardsData.length / 2}
                // showsVerticalScrollIndicator={false}
                // showsHorizontalScrollIndicator={false}
                data={this.state.cardsData}
                renderItem={({ item, index }) => (
                  <TouchableOpacity style={styles.clickContent}>
                    <Card
                      selectDeckId={this.state.selectDeckId}
                      number={item.cardPosition}
                      showCard={true}
                    />
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
              />
            </ScrollView>
          )}
        </View>
      </View>
    );
  }
}

export default ListCards;
