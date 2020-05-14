import React, { Component } from 'react';
import {
  ActivityIndicator,Platform, Alert, Dimensions,View,  StyleSheet, Text, TextInput, TouchableOpacity, ScrollView,Picker } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MyGlobalSetting from '../components/MyGlobalSetting';
import styles from "../components/Style";
import { Header, Badge, Icon, withBadge, Tile,Divider, Avatar, ListItem, Button, Card, Image  } from 'react-native-elements';
import { getStar,currencyFormat,LoaderScreen }  from '../components/GlobalFunction';
import { InfiniteListView } from "react-native-infinite-listview";
import RBSheet from "react-native-raw-bottom-sheet";
import { DatePicker, Form } from 'react-native-form-idable';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
const { width,height } = Dimensions.get('window');
console.disableYellowBox = true;
import Colors from '../constants/Colors';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      category: this.props.navigation.getParam('category', ''),
      dataSearch :[],
      isRefreshing: false,
      isLoadingMore: false,
    }
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const {params = {}} = navigation.state;

    return {
        headerTitle: (
          <View>
          <Text style={{fontWeight:'bold', color:'white', fontSize:20}}>Project</Text>
          </View>
        ),
        headerRight: (
          <View style={{marginTop:2,padding:15,marginRight:5}}>
            <Icon  type="ionicon"  size={27} color='#ffffff' name="md-bookmark" />
          </View>
        ),
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle: {
          backgroundColor: params.mainColor,
          elevation : 0,
        },
        headerTintColor: '#fff',
    };
  };
  getSearch() {
    const { navigation } =this.props;
    const category =navigation.getParam('category', 'all');
    if(category=='all'){
      this.setState({
        allBgColor: '#28634a',
        allTextColor: '#ffffff',

        webBgColor: '#ffffff',
        webTextColor: '#28634a',

        mobileBgColor: '#ffffff',
        mobileTextColor: '#28634a',

        designBgColor: '#ffffff',
        designTextColor: '#28634a',
      });
      var  apiUrl= MyGlobalSetting.url_api + 'project';
    }else{ 
      if(category=='Web Development'){
        this.setState({
          allBgColor: '#ffffff',
          allTextColor: '#28634a',

          webBgColor: '#28634a',
          webTextColor: '#ffffff',

          mobileBgColor: '#ffffff',
          mobileTextColor: '#28634a',

          designBgColor: '#ffffff',
          designTextColor: '#28634a',
        });
      }else if(category=='Mobile App'){
        this.setState({
          allBgColor: '#ffffff',
          allTextColor: '#28634a',

          webBgColor: '#ffffff',
          webTextColor: '#28634a',

          mobileBgColor: '#28634a',
          mobileTextColor: '#ffffff',

          designBgColor: '#ffffff',
          designTextColor: '#28634a',
        });
      }else if(category=='Design'){
        this.setState({
          allBgColor: '#ffffff',
          allTextColor: '#28634a',

          webBgColor: '#ffffff',
          webTextColor: '#28634a',

          mobileBgColor: '#ffffff',
          mobileTextColor: '#28634a',

          designBgColor: '#28634a',
          designTextColor: '#ffffff',
        });
      }
      var  apiUrl= MyGlobalSetting.url_api + 'project?category='+category;
    }
    return fetch(apiUrl)
     .then((response) => response.json())
     .then((responseJson) => {
       this.setState({
         isLoading: false,
         dataSearch: responseJson.result,
       }, function(){

       });

     })
     .catch((error) =>{
       console.error(error);
     });
   }
   

FilterSearch = (category) =>{ 
  this.setState({
    isLoading: true,
  });
  let data = {  
      category: category,
  }
  this.props.navigation.setParams(data);
  setTimeout( () => {
    this.getSearch();
  }, 2000);
}

   componentDidMount(){
    this.props.navigation.setParams({mainColor: Colors.mainColor});
    this.getSearch();
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true });
    setTimeout( () => {
      this.setState({ isRefreshing: false });
    }, 3000);
  };

  canLoadMoreContent = () => {
    return this.state.dataSearch.length < 2 && !this.state.isLoadingMore;
  };
  
  onLoadMore = () => {
    console.log('start loading more');
    this.setState({ isLoadingMore: true });
    setTimeout( () => {
      console.log('stop loading more');
      this.setState({
        isLoadingMore: false,
        dataSearch: [...this.state.dataSearch]
      });
    }, 3000);
  };
  renderRow = (ro, sectionID, rowID) => {
  const { onFocus, onBlur, otherProps, navigation } =this.props;
  const image = 'http://nizam.id'+ro.image;
  console.log(image);
    return (
      <TouchableOpacity>
      <Card containerStyle={{borderRadius:7}} 
         image={{uri: image}}
         imageStyle={{height:230}}>
          <Text  style={{   marginBottom:3, color:'#000',fontSize:15, fontWeight:'bold'}}>
            {ro.title}
          </Text>
          <Text  style={[styles.textGray, {   marginBottom:5,fontSize:13, }]}>
            Client : {ro.client}
          </Text>
       
          <View>
          <Divider style={{ backgroundColor: '#d4d4d4',marginTop:5, marginBottom:5 }} />
          </View>

          <View style={{ flex: 1,flexDirection: 'row'}} >
          <Text style={styles.textGray}> Category</Text>
          <Text style={{color:Colors.mainColor,fontSize:15, fontWeight:'bold',marginLeft: 'auto'}}>{ro.category}</Text>
          </View>
        </Card>
        </TouchableOpacity>
    );
  };

  
renderList() {
  const { onFocus, onBlur, otherProps, navigation } =this.props;
  return (

  <View>
      <View style={{flexGrow: 1, flexDirection:'row',backgroundColor: Colors.mainColor, padding: 14,marginTop:-10, justifyContent:'center'}}>
        <Button
          title="All Project"
          buttonStyle={{borderRadius:7,backgroundColor:this.state.allBgColor}}
          containerStyle={{marginRight :8}}
          onPress={() => this.FilterSearch('all')}
          titleStyle={{color:this.state.allTextColor,fontSize:11}}
        />
       
       <Button
          title="Web Development"
          buttonStyle={{borderRadius:7,backgroundColor:this.state.webBgColor}}
          containerStyle={{marginRight :8}}
          onPress={() => this.FilterSearch('Web Development')}
          titleStyle={{color:this.state.webTextColor,fontSize:11}}
        />
         <Button
          title="Mobile App"
          buttonStyle={{borderRadius:7,backgroundColor:this.state.mobileBgColor}}
          containerStyle={{marginRight :8}}
          onPress={() => this.FilterSearch('Mobile App')}
          titleStyle={{color:this.state.mobileTextColor,fontSize:11}}
        />
        <Button
          title="Design"
          buttonStyle={{borderRadius:7,backgroundColor:this.state.designBgColor}}
          containerStyle={{marginRight :8}}
          onPress={() => this.FilterSearch('Design')}
          titleStyle={{color:this.state.designTextColor,fontSize:11}}
        />
      </View>
      <View style={{height:height-140}}>
        <InfiniteListView
        dataArray={this.state.dataSearch}
        renderRow={this.renderRow}
        onRefresh={this.onRefresh}
        isRefreshing={this.state.isRefreshing}
        canLoadMore={this.canLoadMoreContent}
        isLoadingMore={this.state.isLoadingMore}
        /*renderLoadMoreRow={this.renderLoadMoreRow}*/
        onLoadMore={this.onLoadMore}/>   
      </View>
  </View>
  )
}

  render() {
    const { onFocus, onBlur, otherProps, navigation } =this.props;
    if(this.state.isLoading){
      return(
        <LoaderScreen />
      )
    }
    if(this.state.dataSearch.length<1){
      return (
      <View style={styles.containerGray}>
       <View style={{alignItems:'center',marginTop:height/2-150}}>
          <Icon
            name='search-minus'
            type='font-awesome'
            color={Colors.mainColor}
            size={100}
             />
              <Text style={[styles.textGray,{marginTop:20, marginBottom:25, fontWeight:'bold', fontSize:20}]}>
             {navigation.getParam('group','Data')} Not Found 
              </Text>
          </View>  
         
      </View>
      )
      }else{
      return (
        <View style={styles.containerGray}>
        {this.renderList()}
      </View>
       )
      }
  }
}


export default App;  
