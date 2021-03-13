import React, { Component } from "react";
import { View, Alert } from "react-native";
import { connect } from "react-redux";
import { Picker } from "@react-native-community/picker";

//Styles
import styles from "./deckSelect.style.js";

//Components
import FullButton from "../FullButton";

//Redux
import { selectDeck } from "../../redux/actions/selectedDeck";

class DeckSelect extends Component {
  constructor() {
    super();
    this.state = {
      selectedValue: 0,
    };
  }

  didMount() {
    this.setState({
      selectedValue: this.props.currentDeck.value.data
    })
  }

  changeDeck(deck) {
    console.log("deck", deck);
    this.props.selectCurrentDeck(deck);
    console.log("PROPS", this.props.currentDeck.value.data);

    Alert.alert(
      'Baralho escolhido',
      'Seu baralho foi trocado com sucesso'
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.selectedValue}
          style={styles.selectPicker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ selectedValue: itemValue })
          }
        >
          <Picker.Item label="Blue Fluck" value="0" />
          <Picker.Item label="Tarot de Thorth" value="1" />
        </Picker>

        <FullButton
          text="Alterar"
          disable={false}
          onPress={() => this.changeDeck(this.state.selectedValue)}
        />

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentDeck: state.deckReducer.selectedDeck,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCurrentDeck: (deck) => dispatch(selectDeck(deck)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelect);
