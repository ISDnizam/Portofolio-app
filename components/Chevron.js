import React from 'react'
import { Icon } from 'react-native-elements'
import Colors from '../constants/Colors';

const Chevron = () => (
  <Icon
    name="chevron-right"
    type="entypo"
    color={Colors.mainColor}
    containerStyle={{ marginLeft: -15, width: 20 }}
  />
)

export default Chevron
