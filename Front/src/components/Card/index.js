import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, Text, TouchableOpacity } from "react-native";
// Styles
import styles from "./card.style";

//Content
import cards_info from "../../assets/iquilibrio.json";
import CardFlip from "react-native-card-flip";
import Modal from "react-native-modal";
import FullButton from "../FullButton";
export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      backGround: {},
      show: false,
      selectedImage: {},
      showModal: false,
    };
  }
  
  static propTypes = {
    selectDeckId: PropTypes.selectDeckId,
    number: PropTypes.number,
    showCard: PropTypes.bool,
  };

  renderModal(textContent) {
    return (
      <View>
        <Modal isVisible={this.state.showModal}>
          <View>
            <Text style={{ color: "white" }}>{textContent}</Text>
            <FullButton
              text="Fechar"
              disable={false}
              onPress={() => this.setState({ showModal: false })}
            />
          </View>
        </Modal>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.cardContainer}>          
        <CardFlip
          ref={(card) => (this.state.show = card)}
          style={styles.cardContainer}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.card]}
            onPress={() => this.state.show.flip()}
          >
            <Image style={styles.image} source={this.state.backGround.src} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.card]}
            onPress={() => this.setState({ showModal: true })}
          >
            <Image style={styles.image} source={this.state.selectedImage.src} />
          </TouchableOpacity>
        </CardFlip>
        {this.renderModal(this.state.selectedImage.description)}
      </View>
    );
  }

  async componentDidMount() {
    await this.getImagesArr();
    this.setState({ selectedImage: cards_info[this.props.number] });
    if (this.props.showCard) {
      setTimeout(() => {
        this.state.show.flip();
      }, 100);
    }
  }

  async getImagesArr() {
    try {
      let data = await this.addImagesSrc(this.props.selectDeckId);
      this.setState({
        images: data,
        isLoading: false,
        backGround: data[22],
      });
    } catch (error) {
      console.log("Get Cards Image Error", error);
    }
  }

  // drawnCard(showCard) {
  //     this.setState({
  //         show: showCard
  //     })
  // }

  async componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps", newProps);
  }

  async addImagesSrc(deck = 0) {
    try {
      console.log("deck", deck);
      if (deck == 0) {
        cards_info[0].src = require("../../assets/BlueFluke/00.jpg");
        cards_info[1].src = require("../../assets/BlueFluke/01.jpg");
        cards_info[2].src = require("../../assets/BlueFluke/02.jpg");
        cards_info[3].src = require("../../assets/BlueFluke/03.jpg");
        cards_info[4].src = require("../../assets/BlueFluke/04.jpg");
        cards_info[5].src = require("../../assets/BlueFluke/05.jpg");
        cards_info[6].src = require("../../assets/BlueFluke/06.jpg");
        cards_info[7].src = require("../../assets/BlueFluke/07.jpg");
        cards_info[8].src = require("../../assets/BlueFluke/08.jpg");
        cards_info[9].src = require("../../assets/BlueFluke/09.jpg");
        cards_info[10].src = require("../../assets/BlueFluke/10.jpg");
        cards_info[11].src = require("../../assets/BlueFluke/11.jpg");
        cards_info[12].src = require("../../assets/BlueFluke/12.jpg");
        cards_info[13].src = require("../../assets/BlueFluke/13.jpg");
        cards_info[14].src = require("../../assets/BlueFluke/14.jpg");
        cards_info[15].src = require("../../assets/BlueFluke/15.jpg");
        cards_info[16].src = require("../../assets/BlueFluke/16.jpg");
        cards_info[17].src = require("../../assets/BlueFluke/17.jpg");
        cards_info[18].src = require("../../assets/BlueFluke/18.jpg");
        cards_info[19].src = require("../../assets/BlueFluke/19.jpg");
        cards_info[20].src = require("../../assets/BlueFluke/20.jpg");
        cards_info[21].src = require("../../assets/BlueFluke/21.jpg");
        cards_info[22].src = require("../../assets/BlueFluke/BackGround.jpg");
      } else if (deck == 1) {
        cards_info[0].src = require("../../assets/Thoth/00.jpg");
        cards_info[1].src = require("../../assets/Thoth/01.jpg");
        cards_info[2].src = require("../../assets/Thoth/02.jpg");
        cards_info[3].src = require("../../assets/Thoth/03.jpg");
        cards_info[4].src = require("../../assets/Thoth/04.jpg");
        cards_info[5].src = require("../../assets/Thoth/05.jpg");
        cards_info[6].src = require("../../assets/Thoth/06.jpg");
        cards_info[7].src = require("../../assets/Thoth/07.jpg");
        cards_info[8].src = require("../../assets/Thoth/08.jpg");
        cards_info[9].src = require("../../assets/Thoth/09.jpg");
        cards_info[10].src = require("../../assets/Thoth/10.jpg");
        cards_info[11].src = require("../../assets/Thoth/11.jpg");
        cards_info[12].src = require("../../assets/Thoth/12.jpg");
        cards_info[13].src = require("../../assets/Thoth/13.jpg");
        cards_info[14].src = require("../../assets/Thoth/14.jpg");
        cards_info[15].src = require("../../assets/Thoth/15.jpg");
        cards_info[16].src = require("../../assets/Thoth/16.jpg");
        cards_info[17].src = require("../../assets/Thoth/17.jpg");
        cards_info[18].src = require("../../assets/Thoth/18.jpg");
        cards_info[19].src = require("../../assets/Thoth/19.jpg");
        cards_info[20].src = require("../../assets/Thoth/20.jpg");
        cards_info[21].src = require("../../assets/Thoth/21.jpg");
        cards_info[22].src = require("../../assets/Thoth/BackGround.jpg");
      }
     

      return cards_info;
    } catch (error) {
      console.log("Get Cards Image Error", error);
    }
  }
}
