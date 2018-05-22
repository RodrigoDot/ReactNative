import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

 class Item extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { mainView } = Styles;
    return (
      <Text>
        ITEM
      </Text>
    );
  }

}

const Styles = StyleSheet.create({
  mainView: {
    flex: 1
  }
});

export default Item;
