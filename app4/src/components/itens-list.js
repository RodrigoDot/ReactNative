import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

import Axios from 'axios';
import Item from './item.js';

 class ItensList extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    Axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        console.log('Erro ao recuperar os dados.');
      });
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
