import React from 'react';
import { Alert, Image, AsyncStorage,ScrollView, TouchableOpacity,Keyboard, Text, View, TextInput, TouchableWithoutFeedback,  KeyboardAvoidingView} from 'react-native';
import { Avatar, ListItem , Button} from 'react-native-elements'
import { createAppContainer, NavigationActions, StackActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styles from "../components/Style";
import FaIcon from '@expo/vector-icons/FontAwesome';
import InfoText from '../components/InfoText';
import Chevron from '../components/Chevron';
import BaseIcon from '../components/BaseIcon';
import { Icon } from 'react-native-elements';
import GlobalSetting from '../components/MyGlobalSetting';
import AwesomeAlert from 'react-native-awesome-alerts';
import { LoaderScreen }  from '../components/GlobalFunction';
import { Linking } from 'expo';
import Colors from '../constants/Colors';


 class ProfileScreen extends React.Component {
  static navigationOptions= ({navigation}) => {
    const {params = {}} = navigation.state;

    return {
    headerTitle: 'About Me',
     headerStyle: {
      elevation : 0,
    backgroundColor: params.mainColor,
    },
    headerTintColor: '#fff',
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      view: 'Profile',
      isLoading: true,
      opacity: 0,
      opacityButton: 1,
      showAlert: false 

    };
  }
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
  componentDidMount() {
this.props.navigation.setParams({mainColor: Colors.mainColor});
    if(this.state.view==''){
      this.setState({
        view : 'Profile',
      }); 
    }
 
  }

  componentWillUnmount() {
  }

  _downloadCV = () => {
    Linking.openURL('https://nizam.id/assets/doc/CV-Abul-Nizam-Faisal.pdf');
  };

  _web = () => {
    Linking.openURL('https://wa.me/+62856-9664-0323');
  };


  onPressOptions = () => {
    this.props.navigation.navigate('options')
  }

  
 
  renderProfile() {
    return  (
<View style={{marginTop:40}}>
      
      <View style={styles.cardProfileHeader} >
      <View style={{flex:1, flexDirectio:'row',}}>
      <ListItem
    title='Abul Nizam Faisal'
    subtitle='Back End Dev'
    titleStyle={{ fontWeight: 'bold', color:'#4d4d4d' }}
    containerStyle={styles.listItemContainer}
    leftAvatar={{
      source: 'https://www.nizam.id/assets/images/12.jpg' && { uri: 'https://www.nizam.id/assets/images/12.jpg' },
      title: 'sss',
      height : 60,
      width:60
    }}
    bottomDivider
  />
   <ListItem
            title="+6285696640323"
            titleStyle={{ fontWeight: 'bold', color:'#4d4d4d',fontSize:13  }}
            onPress={this._web}
            containerStyle={styles.listItemContainerNoBorder}
            leftIcon={
              <Icon
              name='envelope'
              type='font-awesome'
              color='#919191'
              size={15} />
            }
            rightIcon={<Chevron />}
          />
        </View>
      </View>

      
      <View style={styles.cardProfile} >

  <View style={{flex:1, flexDirectio:'row',}}>
      <ListItem
      title="View CV"
      titleStyle={{ fontWeight: 'bold', color:'#4d4d4d',fontSize:13 }}
      onPress={this._downloadCV}
      containerStyle={styles.listItemContainerNoBorder}
      leftIcon={
        <Icon
        name='download'
        type='font-awesome'
        color='#919191'
        size={15} />
      }
      rightIcon={<Chevron />}
    />
  </View>
</View> 

    
<View style={styles.cardProfile} >
<View style={{flex:1, flexDirectio:'row',}}>
<Text  style={[styles.tabBarInfoText, styles.textGray,{fontWeight:'bold', fontSize:17, marginTop:10, marginLeft:10}]}>Profile</Text>



<ListItem
            // chevron
            title="Birthday"
            titleStyle={{ fontWeight: 'bold', color:'#4d4d4d',fontSize:13 }}
            subtitle="May, 06 1994"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              name='user'
              type='font-awesome'
              color='#919191'
              size={15} />
            }
          />

          <ListItem
            title="Study"
            titleStyle={{ fontWeight: 'bold', color:'#4d4d4d',fontSize:13 }}
            subtitle="UMS (Surakarta)"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              name='university'
              type='font-awesome'
              color='#919191'
              size={15} />
            }
          />


        
          <ListItem
            title="Email"
            titleStyle={{ fontWeight: 'bold', color:'#4d4d4d',fontSize:13 }}
            subtitle="isdnizam1@gmail.com"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              name='envelope'
              type='font-awesome'
              color='#919191'
              size={15} />
            }
          />

          <ListItem
            title="City"
            titleStyle={{ fontWeight: 'bold', color:'#4d4d4d',fontSize:13 }}
            subtitle="Pati"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              name='map-marker'
              type='font-awesome'
              color='#919191'
              size={22} />
            }
          />



          <ListItem
            title="Phone"
            titleStyle={{ fontWeight: 'bold', color:'#4d4d4d',fontSize:13 }}
            subtitle="085696640323"
            rightTitleStyle={{ fontSize: 14 }}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              name='phone'
              type='font-awesome'
              color='#919191'
              size={22} />
            }
          />

      </View>
    </View>


    
<View style={styles.cardProfile} >
<View style={{flex:1, flexDirectio:'row',}}>
<Text  style={[styles.tabBarInfoText, styles.textGray,{fontWeight:'bold', fontSize:17, marginTop:10, marginLeft:10}]}>Skills</Text>
<ListItem
            // chevron
            title="Back End"
            titleStyle={{ fontWeight: 'bold', color:'#4d4d4d',fontSize:13 }}
            subtitle="Codeigniter, Laravel, Yii 2, RestFull API"
            rightTitleStyle={{ fontSize: 13 }}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              name='terminal'
              type='font-awesome'
              color='#919191'
              size={22} />
            }
          />

          <ListItem
            title="Front End"
            titleStyle={{ fontWeight: 'bold', color:'#4d4d4d',fontSize:13 }}
            subtitle="CSS, JavaScript/Jquery, React JS, Bootstrap"
            rightTitleStyle={{ fontSize: 14 }}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              name='code'
              type='font-awesome'
              color='#919191'
              size={22} />
            }
          />


        
          <ListItem
            title="Mobile Programming"
            titleStyle={{ fontWeight: 'bold', color:'#4d4d4d',fontSize:13 }}
            subtitle="React Native"
            rightTitleStyle={{ fontSize: 14 }}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              name='android'
              type='font-awesome'
              color='#919191'
              size={22} />
            }
          />

          <ListItem
            title="Database"
            titleStyle={{ fontWeight: 'bold', color:'#4d4d4d',fontSize:13 }}
            subtitle="MySQL/MariaDb"
            rightTitleStyle={{ fontSize: 14 }}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              name='security'
              type='material'
              color='#919191'
              size={22} />
            }
          />



          <ListItem
            title="Project Management"
            titleStyle={{ fontWeight: 'bold', color:'#4d4d4d',fontSize:13 }}
            subtitle="SCRUM/Jira"
            rightTitleStyle={{ fontSize: 14 }}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              name='users'
              type='font-awesome'
              color='#919191'
              size={22} />
            }
          />




           <ListItem
            title="Version Controls"
            titleStyle={{ fontWeight: 'bold', color:'#4d4d4d',fontSize:13 }}
            subtitle="GIT"
            onPress={() => this.onPressOptions()}
            bottomDivider
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              name='github'
              type='font-awesome'
              color='#919191'
              size={22} />
            }

          />
          <ListItem
            title="Server"
            titleStyle={{ fontWeight: 'bold', color:'#4d4d4d',fontSize:13 }}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              name='gear'
              type='font-awesome'
              color='#919191'
              size={22} />
            }
          />
    </View>
    </View>



    </View>

      );
    }


  render() {
   
    
    const {showAlert} = this.state;
      return (
        <View style={styles.containerGray}>
          <AwesomeAlert
          show={showAlert}
          alertContainerStyle={{zIndex:9999,  height:400}}
          overlayStyle={{ flex: 1,
            position: 'absolute',
            opacity: 0.8,
            backgroundColor: 'black'}}
          contentContainerStyle={{width:300}}
          showProgress={false}
          title="Logging Out"
          message="Oh, no ! Are you sure want to log out ?"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, I Sure"
          confirmButtonColor="#25646d"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.SignOut();
          }}
        />

        <ScrollView>
  <View style={styles.containerIb}>
      </View>

      {this.renderProfile()}
   
        </ScrollView>
      </View>
      );
  }
}




export default ProfileScreen;  
