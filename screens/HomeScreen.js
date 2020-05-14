import React, { Fragment } from 'react';
import { Alert, TouchableHighlight, Platform,AsyncStorage,FlatList, ScrollView, Dimensions,
   SafeAreaView, StatusBar, Button, View, Text,StyleSheet,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,ActivityIndicator,Image } from 'react-native';
import { createAppContainer,createDrawerNavigator,withNavigation  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Header, Badge, Icon, withBadge, Tile, Avatar, ListItem,Divider  } from 'react-native-elements';
import styles from "../components/Style";
import Menu from "../components/Menu";
import MyGlobalSetting from '../components/MyGlobalSetting';
import { LoaderScreen }  from '../components/GlobalFunction';
import { Linking } from 'expo';
const { width } = Dimensions.get('window');
const height = width * 0.8;
import Colors from '../constants/Colors';


class HomeScreen extends React.Component {
  static navigationOptions= ({navigation}) => {
    const {params = {}} = navigation.state;

    return {
    headerTitle: null,
     headerLeft: null,
     headerStyle: {
      elevation : 0,
    backgroundColor: params.mainColor,
    },
    headerTintColor: params.mainColor,
    }
  };
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      email : '',
      password : '',
      name : '',
      isAuthenticated :false,
    }
  }

  _downloadCV = () => {
    Linking.openURL('https://nizam.id/assets/doc/CV-Abul-Nizam-Faisal.pdf');
  };

    componentDidMount(){
          this.setState({
            isLoading: false,
         });
      this.props.navigation.setParams({mainColor: Colors.mainColor});
    }
 
    renderTabBar() {
      const { navigation } =this.props;
        return  (
          <View style={styles.tabBarInfoContainer}  >
          <View style={{flex: 1, flexDirection: 'row', marginLeft:20}}>
          <Icon
            reverse
            name='download'
            type='feather'
            color='#e8e9eb'
            size={12}
            onPress={this._downloadCV} />
            <TouchableOpacity onPress={this._downloadCV}>
            < View style = {{flex: 1,flexDirection: 'column',}} >
              <Text style={[styles.tabBarInfoText, styles.left10]}>
              Download CV
              </Text>
              <Text style={[styles.tabBarInfoText, styles.textGray, styles.left10]}>
              To see more my profile, please download my CV
              </Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
        );
    }
    renderMenu() {
      return  (
      <View style={{padding:10, width:'100%'}}>
        <View style={{   flex: 1,flexDirection: 'row',}} >
          <Menu name='Project' icon='copy'/>
          <Menu name='About' icon='edit'/>
        </View>
        <View style={{   flex: 1,flexDirection: 'row',marginTop:20}} >
          <Menu name='Contact' icon='envelope-o'/>
          <Menu name='Download CV' icon='download'/>
        </View>
      </View>
          );
      }


  render() {
    const { navigation } =this.props;
     if(this.state.isLoading){
      return(
        <LoaderScreen/>
      )
    }
    
    return (
     <View style={[styles.container]}>
   
    <View style={[styles.containerIb2,{backgroundColor:Colors.mainColor}]}>
          </View>
   
      
          <View style={[styles.cardHeaderHome,{marginBottom:20}]} >
            <View style={{flex: 1, flexDirectio:'row',justifyContent:'center'}}>
            <View style={{flex: 2, flexDirection: 'column',justifyContent:'center'}}>
              <Text style={{marginLeft:-10,color:'#fff', fontSize:20, fontWeight:'bold'}}>
                {'Abul Nizam Faisal'}
              </Text>
              <Text style={{ marginLeft:-10,  color:'#fff', fontSize:15, marginTop:5 }}>
              {'me@nizam.id'}
              </Text>
            </View>
            <View style={{flex: 2, flexDirection: 'column',justifyContent:'center'}}>
              <Image source={require('../assets/images/work3.png')} style={{width:120,height:100,marginLeft:'auto'}}/>
            </View>
            </View>
          </View>
        <View style={[styles.cardHeaderHome2,{marginTop:10, height:100}]} >
          <View style={{flex: 1, flexDirection: 'row',padding:10}}>
            <View style={{flex: 2, flexDirection: 'column',justifyContent:'center'}}>
            <Icon
            reverse
            name='web'
            type='foundation'
            color={Colors.mainColor}
            containerStyle={{alignItems:'center',alignContent:'center'}}
            size={20}
            // onPress={this._downloadCV} 
            />
              <Text style={{fontWeight :'600',textAlign:'center', fontSize:11, color:'#3b3a3a'}} >
              {'Web Dev'}
              </Text>
              <Text style={{fontWeight :'600',textAlign:'center', fontSize:11, color:Colors.mainColor}} >
              {'24'}
              </Text>
            </View>
            <View style={{flex: 2, flexDirection: 'column',justifyContent:'center'}}>
            <Icon
            reverse
            name='android'
            type='font-awesome'
            color={Colors.mainColor}
            size={20}
            containerStyle={{alignItems:'center',alignContent:'center'}}
            // onPress={this._downloadCV} 
            />
              <Text style={{fontWeight :'600', fontSize:10, textAlign:'center', color:'#3b3a3a'}} >
              {'Android App'}
              </Text>
              <Text style={{fontWeight :'600',textAlign:'center', fontSize:11, color:Colors.mainColor}} >
              {'4'}
              </Text>
            </View>
            <View style={{flex: 2, flexDirection: 'column',justifyContent:'center'}}>
            <Icon
            reverse
            name='app-store'
            type='entypo'
            color={Colors.mainColor}
            containerStyle={{alignItems:'center',alignContent:'center'}}
            size={20}
            // onPress={this._downloadCV} 
            />
              <Text style={{fontWeight :'600', fontSize:10, textAlign:'center', color:'#3b3a3a'}} >
              {'iOS App'}
              </Text>
              <Text style={{fontWeight :'600',textAlign:'center', fontSize:11, color:Colors.mainColor}} >
              {'1'}
              </Text>
            </View>
          </View>

        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <ScrollView >

        {this.renderMenu()}
        </ScrollView>

      </View>
      </View>

    );
  }
}


const RootStack = createStackNavigator({
  Home: HomeScreen,
},
  {
    initialRouteName: 'Home',
  });

export default createAppContainer(RootStack);