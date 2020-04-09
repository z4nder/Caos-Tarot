import React, { Component, View } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './fullButton.style'

// ExamplesRegistry.addComponentExample('Full Button', () =>
//   <FullButton
//     text='Hey there'
//     onPress={() => window.alert('Full Button Pressed!')}
//   />
// )

export default class FullButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object,
    disable: PropTypes.bool,
    // errorMessage: PropTypes.string
  }

  render () {
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text && this.props.text.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
}
