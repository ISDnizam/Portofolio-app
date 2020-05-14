import * as React from 'react';
import { Alert,FlatList,AsyncStorage, ScrollView, ActivityIndicator, Image, StatusBar, Button, View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import MyGlobalSetting from '../components/MyGlobalSetting';

import styles from "../components/Style";
class BookingScreen extends React.Component {
   constructor(props){
    AsyncStorage.getItem('user', (error, result) => {
        if (result) {
           let resultParsed = JSON.parse(result)
           this.setState({
                id_user: resultParsed.id_user,
                email: resultParsed.email,
                name: resultParsed.name,
            });
           this.getTx();
        }
    });
    super(props);
    this.state ={ 
      isLoading: true,
      email : '',
      password : '',
      name : '',
    }
  }
  
    currencyFormat(num) {
    return 'Rp ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


   getTx() {
   
    }
   
  RemoveButton(id_balance){ 
    Alert.alert(
      'Delete Confirm',
      'Are you sure you want to Delete this transaction ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.removeAction(id_balance)},
      ],
      {cancelable: false},
    );    
  }
    removeAction(id_balance) {
    fetch(MyGlobalSetting.url_api + '/transaksi/delete/'+id_balance, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      }).then((response) => response.json())
          .then((responseJson) => {
          this.getTx();
        });
    }
  
 
  render() {


     if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
     <View style={[styles.container]}>
       <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
    <View style={styles.card2}>
      <View style={{position: 'absolute'}}>
        <Text  style={{marginBottom: 75,marginLeft: 10,marginTop: 10,color:'#918e8e'}}>TOTAL OUTGOING</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column',marginTop: 20}}>
        <Ionicons name="ios-stats" color="#128ce3" size={50} />
      </View>
      <View style={{flex: 2.5, flexDirection: 'column',marginTop: 20}}>
       <Text style={{color:'#918e8e'}}>THIS MONTH </Text>
       <Text style={{fontWeight :'600'}} >
       {this.currencyFormat(this.state.dataSource.monthly_outgoing)}
       </Text>
      </View>
      <View style={{flex: 2.5, flexDirection: 'column',marginTop: 20}}>
       <Text style={{color:'#918e8e'}}>ALL OUTGOING </Text>
       <Text style={{fontWeight :'600'}} >
       {this.currencyFormat(this.state.dataSource.all_outgoing)}
       </Text>
      </View>
    </View>
      <View style={{position: 'relative'}}>
        <Text  style={{marginBottom: 19,marginLeft: 10,marginTop: 15,color:'#918e8e'}}>HISTORY TRANSACTION</Text>
      </View>

      <FlatList
       data={this.state.dataSource.balance}
       renderItem={({item}) =>
       <TouchableOpacity 
        onLongPress={() => this.RemoveButton(item.id_balance)}>
       <View style={styles.viewFlat}> 
         <View style={styles.viewData}>
         {item.type == 'in'? <Image source={require('../assets/images/plus.png')} style={styles.imageAvatar} />: <Image source={require('../assets/images/minus.png')} style={styles.imageAvatar} /> }

         
         <View style={{flexDirection:'column'}}>
         <Text style={styles.titleText} >{this.currencyFormat(item.amount)}</Text>
         <Text style={styles.textNormal}> {item.description}</Text>

         </View>
            <View style={styles.textRight}>
              <Text style={styles.textSmall}>
              {item.created_at}
              </Text>
            </View>
         </View>
       </View>  
      </TouchableOpacity>

       }
       keyExtractor={item => item.id_balance.toString()}
     />

    </ScrollView>

       {/* <TouchableOpacity
          activeOpacity={0.7}
           onPress={() => this.props.navigation.push('AddTx')}
          style={styles.TouchableOpacityStyle}>
            <View style={styles.FloatingButtonStyle}>
          <FaIcon name="plus-circle" size={44} color="#128ce3"/>
          </View>
        </TouchableOpacity> */}
 

      </View>
    );
  }
}

BookingScreen.navigationOptions = {
  title: 'Message',
  headerLeft: null,
  headerStyle: {
    backgroundColor: '#d42f3c',
  },
  headerTintColor: '#fff',
};
export default BookingScreen;  
