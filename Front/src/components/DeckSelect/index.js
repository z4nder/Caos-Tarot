import React, { Component } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-community/picker";

import PropTypes from "prop-types";

import { storeSelectedDeck } from '../../services/selectedDeck';

//Styles
import styles from "./deckSelect.style.js";

//Components
import FullButton from "../FullButton";

class DeckSelect extends Component {
  constructor() {
    super();
    this.state = {
      selectedValue: 0,
    };
  }

  static propTypes = {
    defaultValue: PropTypes.object
  };

  componentDidMount() {    
    this.setState({ selectedValue: this.props.defaultValue.deck_id })
  }
  
  async changeDeck(deck) {
    await storeSelectedDeck({deck_id: deck})
  }

  render() {
    return (
     
    );
  }
}

export default DeckSelect;
