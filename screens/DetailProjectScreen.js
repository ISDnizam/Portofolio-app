
import React, { Component } from 'react';
import {
  ActivityIndicator,Platform,WebView, Alert,Image, Dimensions,View,  StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Picker } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MyGlobalSetting from '../components/MyGlobalSetting';
import { Header,Divider , Badge,Button, Icon, withBadge, Tile, Avatar, ListItem  } from 'react-native-elements';
import { getStar,LoaderScreen,currencyFormat }  from '../components/GlobalFunction';
import styles from "../components/Style";
import RBSheet from "react-native-raw-bottom-sheet";
import DataStatic from "../components/DataStatic.json";
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';
import ReactNativeParallaxHeader from 'react-native-parallax-header';

const IS_IPHONE_X = 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 80;
const NAV_BAR_HEIGHT = 90;
const styles2 = StyleSheet.create({
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
 
});

export default class App extends Component {
  static navigationOptions = {
    header :null,
  }
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource :[],
      overview :'',

    }
  }
  getDetail() {
    const { navigation } =this.props;
    const id_vendor =navigation.getParam('id_vendor', '');
    return fetch(MyGlobalSetting.url_api + 'vendor/detail?id_vendor='+id_vendor)
     .then((response) => response.json())
     .then((responseJson) => {
       this.setState({
         isLoading: false,
         dataSource: responseJson.result,
         overview: responseJson.result.overview,
       }, function(){
     
       });

     })
     .catch((error) =>{
       console.error(error);
     });
   }
   
   componentDidMount(){
    this.getDetail();
  }
  

  renderFooter () {
    const { navigation } =this.props;
    var vendor  =this.state.dataSource;
    if(vendor.id_vendor_category==1){
    return (
    <View>
      <View style={[styles.tabBarInfoContainerBorder]}  >
        <View style={{flex: 1, flexDirection: 'row', marginLeft:20}}>
        < View style = {{flex: 1,flexDirection: 'column',}} >
            <Text style={[styles.tabBarInfoText, styles.textGray]}>
             Price/pax starts from
            </Text>
            <Text  style={{color:'#cf961d',fontSize:15, fontWeight:'bold'}}>
            {currencyFormat(parseInt(vendor.meeting_package.special_price))}
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('VenueList',{id_vendor :vendor.id_vendor, vendor_name:vendor.vendor_name })}>
          < View style = {{flex: 1,flexDirection: 'column', marginRight:10}} >
          <Button 
          buttonStyle={{backgroundColor:'#25646d'}}
            title="Select Venue"
            onPress={() =>  navigation.navigate('VenueList',{id_vendor :vendor.id_vendor, vendor_name:vendor.vendor_name })}
          />
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
    }else{
      return false;
    }
    }


  renderNavBar () {
    const { navigation } =this.props;
    var vendor  =this.state.dataSource;
    return (
    <View>
      <View style={styles2.statusBar} />
        <View style={styles2.navBar}>
          <TouchableOpacity style={{marginTop:15}} onPress={() => {}}>
            <Icon  size={23}  onPress={() => this.props.navigation.goBack()} name='arrow-back' color="#fff"/>
          </TouchableOpacity>
          <View style={{flex: 5, flexDirection: 'column'}}>
                <Text style={{ fontSize: 18, marginLeft:10, marginTop:10,  width:250 ,color: '#fff',fontWeight:'bold'}}>
                  {vendor.vendor_name.substr(0, 28)}
                </Text>
                <Text style={{ fontSize: 12, marginLeft:10, marginTop:0, color: '#fff'}}>
                  {vendor.area}, {vendor.city_name}
                </Text>
            </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop:15, zIndex:99}}>
              <Icon  size={20}  name='heart-o'   type='font-awesome' color="#fff"  containerStyle={{ marginRight:25}}/>
              <Icon  size={20}  name='share-alt' onPress={() => this.ShareTo.open()}  type='font-awesome' color="#fff"  containerStyle={{ marginRight:20, zIndex:99}}/>
        </View>
      </View>
    </View>
  )
    }

  
  renderHeader () {
    const { navigation } =this.props;
    var vendor  =this.state.dataSource;
    return (
    <View>
      <View style={[styles.container,styles.contentContainer]}>
        <View style={{ marginTop:-12, flex: 1,flexDirection: 'column',}} >
          <View>
            <Text style={{ fontSize: 18, color: '#545454',fontWeight:'bold'}}>
              {vendor.vendor_name}
            </Text>
          </View>
          <View style={{ flex: 1,flexDirection: 'row',top:4,marginBottom:-12, }} >
            {getStar(vendor.star)}
            <Icon
            name='map-marker'
            type='font-awesome'
            size={13}
            color='#9c9c9c' 
            containerStyle={{marginLeft:7}} />
            <Text   style={[styles.tabBarInfoText, styles.textGray, styles.textSmall]}> {vendor.area}, {vendor.city_name}</Text>
          </View>
        </View>
      </View> 
    </View>
  )
    }

  renderFacilities () {
    const { navigation } =this.props;
    var vendor  =this.state.dataSource;
    return (
    <View>
      <Text  style={{ marginTop:20, marginLeft:10,  color:'#545454',fontSize:15, fontWeight:'bold'}}>Facilities</Text>
      <View style={{flex: 1, flexDirection: 'row',marginLeft:10}}>
        <View style={{alignItems:'center', width:50}}>
          <Icon
          raised
          name='clock-o'
          type='font-awesome'
          color='#878686'
          size={20} />
            <Text style={[styles.textGray,styles.textSmall]}>
            24-hour
            </Text>
        </View>  
        
        <View style={{marginLeft:27,alignItems:'center', width:50}}>
          <Icon
          raised
          name='wifi'
          type='font-awesome'
          color='#878686'
          size={20} />
          <Text style={[styles.textGray,styles.textSmall]}>
            Wifi
            </Text>
        </View>  
        <View style={{marginLeft:27,alignItems:'center', width:55}}>
        <Icon
          raised
          name='restaurant'
          type='material-icon'
          color='#878686'
          size={20}/>
          <Text style={[styles.textGray,styles.textSmall]}>
          Restaurant
          </Text>
        </View>  
    
        <View style={{marginLeft:27,alignItems:'center', width:50}}>
        <Icon
          raised
          name='elevator'
          type='foundation'
          color='#878686'
          size={20}/>
        <Text style={[styles.textGray,styles.textSmall]}>
            Elevator
            </Text>
        </View>  
        
        <View style={{marginLeft:27,alignItems:'center', width:50}}>
        <Icon
          raised
          name='parking'
          type='material-community'
          color='#878686'
          size={20}/>
        <Text style={[styles.textGray,styles.textSmall]}>
            Parking 
            </Text>
        </View>  
      </View>

      <View style={{flex: 1, flexDirection: 'column',alignItems:'center', marginTop:15}}>
        <TouchableOpacity onPress={() => this.Facilities.open()}>
          <Text style={{fontWeight:'bold', color:'#068ac7'}}>
            See All Facilities 
          </Text>
        </TouchableOpacity>
      </View>  

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <RBSheet
          ref={ref => {
            this.Facilities = ref;
          }}
          height={400}
          closeOnDragDown={false}
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 15,
            }
          }}
        >
            <View>
            <Text  style={{   color:'#545454',fontSize:15, fontWeight:'bold', marginBottom:15}}>Facilities</Text>
            <Divider style={{ backgroundColor: '#d4d2d2' }} />
            <ScrollView style={{marginBottom:20}}>
            {vendor.facilities.map((ro ,index)=> (
                <TouchableOpacity
                  key={index}
                  onPress={() => this.Scrollable.close()}
                >
                  <View style={{flex: 1, flexDirection: 'row', marginTop:10, marginLeft:10, marginRight:10}}>
                  <Icon
                  name='dot-single'
                  type='entypo'
                  color='#878686'
                  size={20}/>
                  <Text style={{ textAlign:'center',fontSize: 15, paddingTop: 0,color:'#9c9c9c', marginBottom:7}}>{ro.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
          </ScrollView>
            </View>
        </RBSheet>
      </View>
    </View>
  )
    }

renderDescription () {
    const { navigation } =this.props;
    var vendor  =this.state.dataSource;
    var res = this.state.overview.replace(new RegExp('<br />', 'g'), '\n');
    var overview = res.replace(/<[^>]*>?/gm, '');
    return (
    <View>
        <Text  style={{ marginTop:20, marginLeft:10,  color:'#545454',fontSize:15, fontWeight:'bold'}}>Description</Text>
          <View style={{flex: 1, flexDirection: 'row',marginLeft:10, marginRight:10, marginTop:15}}>
            <Text style={[styles.textGray,styles.textSmall,{fontSize:13}]}>
            <Text  style={{textAlign:'justify'}}>{overview.substr(0, 300)}</Text>
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'column',alignItems:'center', marginTop:15, marginBottom:15}}>
            <TouchableOpacity onPress={() => this.Description.open()}>
              <Text style={{fontWeight:'bold', color:'#068ac7'}}>
                See Details 
              </Text>
            </TouchableOpacity>
          </View>  
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <RBSheet
          ref={ref => {
            this.Description = ref;
          }}
          height={350}

          closeOnDragDown={false}
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 15,
            }
          }}
        >
          <View>
            <Text  style={{   color:'#545454',fontSize:15, fontWeight:'bold', marginBottom:15}}>Description</Text>
            <Divider style={{ backgroundColor: '#d4d2d2' }} />
            <ScrollView>
            <View style={styles.gridContainer}>
            <Text style={[styles.textGray,styles.textSmall,{fontSize:13}]}>
          {overview}  
            </Text>
            </View>
          </ScrollView>
          </View>
        </RBSheet>
      </View>
    </View>
  )
    }

    renderLocation () {
      const { navigation } =this.props;
      var vendor  =this.state.dataSource;
      return (
      <View>
          <Text  style={{ marginTop:20, marginLeft:10,  color:'#545454',fontSize:15, fontWeight:'bold'}}>
            Location  
          </Text>
          <View style={{flex: 1, marginLeft:10, marginRight:10,flexDirection: 'column',alignItems:'center', marginTop:7}}>
          <View style={styles.cardMap}>
            <MapView  
            clustering={false}
              region={{  
                latitude: parseFloat(vendor.lat),  
                longitude: parseFloat(vendor.lng),  
                latitudeDelta: 0.5,  
                longitudeDelta: 0.5  
              }}  
              style={{  width: 360, height: 200,	 }}  
            >  
            <Marker coordinate={{ latitude: parseFloat(vendor.lat), longitude: parseFloat(vendor.lng) }}  cluster={false}/> 
            
              {/* {vendor.attraction.map((ro ,index)=> (
                  <Marker coordinate={{ latitude: parseFloat(ro.lat), longitude: parseFloat(ro.lng) }}  cluster={false}/>  
              ))} */} 
            </MapView>
          </View>
          <View style={styles.listData} >
            <View style={{flex:1, flexDirectio:'row',}}>
              <ListItem
              title= {vendor.vendor_name} 
              titleStyle={{ fontWeight: 'bold', color:'#545454',fontSize:14 }}
              subtitleStyle={{ fontSize:13 }}
              containerStyle={styles.listItemContainerNoBorder}
              subtitle= {vendor.address} 
              leftIcon={
                <Icon
                name='building'
                type='font-awesome'
                color='#25646d'
                size={27} />
              }
            />
            {vendor.attraction.map((ro ,index)=> (
              <ListItem
              key={index} 
              title={ro.vendor_name}
              titleStyle={{ fontWeight: 'bold', color:'#545454',fontSize:14 }}
              subtitleStyle={{ fontSize:12,color:'#9c9c9c' }}
              containerStyle={styles.listItemContainerNoBorder}
              subtitle={ro.distance+ " Km"}
              onPress={() => navigation.push('DetailVendor', {'id_vendor' : ro.id_vendor})}
              leftIcon={
                <Icon
                name='map-marker'
                type='font-awesome'
                color='#919191'
                size={26} />
              }
            />
            ))}
            </View>
          </View>
          </View>  
      </View>
    )
      }



  renderShareTo () {
    const { navigation } =this.props;
    var vendor  =this.state.dataSource;
    return (
    <View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <RBSheet
        ref={ref => {
          this.ShareTo = ref;
        }}
        height={350}

        closeOnDragDown={false}
        customStyles={{
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 15,
          }
        }}>

        <View>
            <Text  style={{   color:'#545454',fontSize:15, fontWeight:'bold', marginBottom:15}}>Share To</Text>
            <Divider style={{ backgroundColor: '#d4d2d2' }} />
            <ScrollView>
            <View style={styles.gridContainer}>
            {DataStatic.facilities.map(grid => (
                <TouchableOpacity
                  key={grid.icon}
                  onPress={() => this.Scrollable.close()}
                >
                  <View  style={{alignItems:'center', textAlign:'center', width:40, marginLeft:20,marginRight:20}}>
                  <Icon
                  raised
                  name={grid.icon}
                  type='font-awesome'
                  color='#878686'
                  size={20}/>
                  </View>
                  <Text style={{ textAlign:'center',fontSize: 11, paddingTop: 0,color: "#333", marginBottom:7}}>{grid.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
            </View>
        </RBSheet>
      </View>
    </View>
  )
    }






  render() {
    const { navigation } =this.props;
    var vendor  =this.state.dataSource;
    var res = this.state.overview.replace(new RegExp('<br />', 'g'), '\n');
    var overview = res.replace(/<[^>]*>?/gm, '');
    console.log(vendor.meeting_package);
    if(this.state.isLoading){
      return(
      <View style={{flex: 1,  marginTop:50,alignItems:'center', alignContent:'center'}}>
          <LoaderScreen />
      </View>
      )
    }
    if(vendor.id_vendor_category==1){
    return (
      <View style={styles.container}>
        <ReactNativeParallaxHeader
          headerMinHeight={HEADER_HEIGHT}
          headerMaxHeight={230}
          extraScrollHeight={20}
          navbarColor="#25646d"
          title=''
          headerTitle='ssssss'
          titleStyle={{fontSize: 15,fontWeight:'bold'}}
          backgroundImage={{uri: vendor.vendor_header}}
          backgroundImageScale={1.2}
          renderNavBar={() => (
            <View style={styles2.navContainer}>
             {this.renderNavBar()}
            </View>
            )}

          renderContent={() => (
            <ScrollView>
              {this.renderHeader()}  
              <Divider style={{ backgroundColor: '#d4d2d2' }} />
              {this.renderFacilities()}  
              {this.renderDescription()}  
              {/* <Divider style={{ backgroundColor: '#d4d2d2' }} /> */}
              {this.renderLocation()}  
              {this.renderShareTo()}  
            </ScrollView>
            )}
          containerStyle={styles2.container}
          contentContainerStyle={styles2.contentContainer}
          innerContainerStyle={styles2.container}
          scrollViewProps={{
            onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
            onScrollEndDrag: () => console.log('onScrollEndDrag'),
          }}
          />
          {this.renderFooter()}
      </View>
    );
  }else{
  return (
    <View style={styles.container}>
    <ReactNativeParallaxHeader
      headerMinHeight={HEADER_HEIGHT}
      headerMaxHeight={230}
      extraScrollHeight={20}
      navbarColor="#25646d"
      title=''
      headerTitle='ssssss'
      titleStyle={{fontSize: 15,fontWeight:'bold'}}
      backgroundImage={{uri: vendor.vendor_header}}
      backgroundImageScale={1.2}
      renderNavBar={() => (
        <View style={styles2.navContainer}>
          {this.renderNavBar()}
        </View>
        )}

      renderContent={() => (
        <ScrollView>
        {this.renderHeader()}  
        <Divider style={{ backgroundColor: '#d4d2d2' }} />
        {this.renderDescription()}  
        {/* <Divider style={{ backgroundColor: '#d4d2d2' }} /> */}
        {this.renderLocation()}  
        {this.renderShareTo()}  
        </ScrollView>
       )}
      containerStyle={styles2.container}
      contentContainerStyle={styles2.contentContainer}
      innerContainerStyle={styles2.container}
      scrollViewProps={{
        onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
        onScrollEndDrag: () => console.log('onScrollEndDrag'),
      }}
      />
      {this.renderFooter()}
  </View>
  );
  }
}
  }