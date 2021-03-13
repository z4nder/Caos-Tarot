import React, { Component } from "react";
import Card from "../../../components/Card";
import { View, TouchableOpacity } from "react-native";
import { Bars } from "react-native-loader";
import Carousel from "react-native-snap-carousel";

import {
  scrollInterpolator,
  animatedStyles,
} from "../../../animates/carouselAnimate";

import { getSelectedDeck } from "../../../services/selectedDeck";

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

  async getDeckId() {
    this.setState({
      isLoading: true,
    });
    try {
      const result = await getSelectedDeck();
      this.setState({ selectDeckId: result.deck_id, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false });
    }
  }

  async renderCards() {
    this.setState({
      isLoading: true,
    });
    let items = [];
    for (let index = 0; index < this.props.route.params.cardQuantity; index++) {
      let content = {};
      let randomNumber = null;
      content.id = index;
      do {
        randomNumber = Math.floor(Math.random() * 22);
      } while (this.isEquals(items, randomNumber));
      content.cardPosition = randomNumber;
      content.showCard = false;

      items.push(content);
    }
    this.setState({
      isLoading: false,
      cardsData: items,
    });
  }

  isEquals(items, newNumber) {
    let equals = false;
    for (let index = 0; index < items.length; index++) {
      if (items[index].cardPosition == newNumber) equals = true;
    }
    return equals;
  }

  renderCarousel = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.clickContent}>
        <Card
          selectDeckId={this.state.selectDeckId}
          number={item.cardPosition}
          showCard={false}
        />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {this.state.isLoading ? (
            <Bars size={10} color="#111110" />
          ) : (
            <View>
              <Carousel
                ref={(c) => {
                  this._carousel = c;
                }}
                data={this.state.cardsData}
                renderItem={this.renderCarousel}
                sliderWidth={500}
                itemWidth={350}
                useScrollView={true}
                scrollInterpolator={scrollInterpolator}
                slideInterpolatedStyle={animatedStyles}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default DrawnCards;
