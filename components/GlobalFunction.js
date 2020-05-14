import * as React from 'react';
import {Alert, View,  StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Picker } from 'react-native';
import { Header, Badge, Icon, withBadge, Tile, Avatar, ListItem, Button  } from 'react-native-elements';
import { TextLoader, DotsLoader } from 'react-native-indicator';
import Colors from '../constants/Colors';

export function getStar(count) {
    const items = [];
    let i = 0;
    while (i < count) {
      i++;
      items.push(
        <View  key={i}>
        <Icon name='star' type='font-awesome' color='#dea21b' size={13} />
        </View>
      );
    }
    return items;
}

export function currencyFormat(num) {
  return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function LoaderScreen() {
  return (
    <View style={{flex: 1, padding: 30, marginTop:200,alignItems:'center', alignContent:'center'}}>
      <DotsLoader color={Colors.mainColor} size={15} betweenSpace={15} />
    </View>
  );
}
