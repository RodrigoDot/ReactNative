import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import ItensList from './src/components/itens-list.js';

class app4 extends Component {
  render() {
    return (
      <View>
        <ItensList />
      </View>
    );
  }
}

AppRegistry.registerComponent('app4', () => app4);
