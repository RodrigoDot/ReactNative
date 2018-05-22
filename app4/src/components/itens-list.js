import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

import Item from './item.js';

 class ItensList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { mainView } = Styles;
    return (
      <View>
        <Item />
        <Item />
        <Item />
      </View>
    );
  }

}

const Styles = StyleSheet.create({
  mainView: {
    flex: 1
  }
});

export default ItensList;
