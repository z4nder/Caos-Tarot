import React, { Component } from "react";
import { View } from "react-native";

import { Picker } from "@react-native-community/picker";

import styles from "./SelectYourDeck.style.js";

import {
  getSelectedDeck,
  storeSelectedDeck,
} from "../../services/selectedDeck";

//Components
import FullButton from "../../components/FullButton";

class SelectYourDeck extends Component {
  constructor() {
    super();
    this.state = {
      selectedDeck: "0",
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      this.getDeckId();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async getDeckId() {
    const result = await getSelectedDeck();
    this.setState({ selectedDeck: result.deck_id });
  }

  async changeDeck(deck) {
    await storeSelectedDeck({ deck_id: deck });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.selectContainer}>
          <Picker
            selectedValue={this.state.selectedDeck}
            style={styles.selectPicker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ selectedDeck: itemValue })
            }
          >
            <Picker.Item label="Blue Fluck" value="0" />
            <Picker.Item label="Tarot de Thorth" value="1" />
          </Picker>

          <FullButton
            text="Alterar"
            disable={false}
            onPress={() => this.changeDeck(this.state.selectedDeck)}
          />
        </View>
      </View>
    );
  }
}

export default SelectYourDeck;
