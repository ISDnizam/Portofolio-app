import React, { Fragment } from 'react';
import { Alert, TouchableHighlight, Platform,AsyncStorage,FlatList, ScrollView, Dimensions,
   SafeAreaView, StatusBar, Button, View, Text,StyleSheet,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,ActivityIndicator,Image } from 'react-native';
import { createAppContainer,createDrawerNavigator,withNavigation  } from 'react-navigation';
import {  Icon } from 'react-native-elements';
import styles from "../components/Style";
import { Linking } from 'expo';
import Colors from '../constants/Colors';

const stylesDef = StyleSheet.create({
    image: {
      width :170,
      height:150,
      marginRight :5,
      marginLeft :5,
      padding: 20,
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 5,
      shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,  
        elevation: 2,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
  
class Menu extends React.Component {
    constructor(props){
      super(props);
    }
    
    _openWA = () => {
      Linking.openURL('https://wa.me/+62856-9664-0323');
    };
    _downloadCV = () => {
      Linking.openURL('https://nizam.id/assets/doc/CV-Abul-Nizam-Faisal.pdf');
    };
    render() {
      const { navigation } =this.props;
      return (
        <TouchableOpacity onPress={this.props.name=='Contact'  ? this._openWA : this.props.name=='Download CV'  ? this._downloadCV : () => navigation.push(this.props.name) }> 
            <View    style={[stylesDef.card,stylesDef.image]}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Icon
                        name={this.props.icon}
                        type='font-awesome'
                        size={40}
                        color={Colors.mainColor} 
                        containerStyle={{marginLeft:2}} />
                    <Text  style={[styles.tabBarInfoText, styles.textGray,{fontWeight:'bold', textAlign:'center',fontSize:14, marginTop:10}]}>
                    {this.props.name}
                    </Text>
                </View>
            </View>
          </TouchableOpacity>
      );
 
    }
  }
  export default withNavigation(Menu);