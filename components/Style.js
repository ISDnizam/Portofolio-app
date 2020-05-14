const {Platform,React,Dimensions} = require("react-native");
const win = Dimensions.get('window');
import Colors from '../constants/Colors';
export default {
	   container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  containerGray: {
    flexGrow: 1,
    backgroundColor: '#f7f5f5',
  },
  containerIb2: {
    backgroundColor: '#f7f5f5',
    height: 180,
    width: win.width+40,
    marginTop: -30,
    marginLeft: -20,
    marginRight: -20,
  },
  cardHeaderHome: {
    padding: 15,
    marginTop:-100,
    marginBottom :10,
    marginLeft :15,
    marginRight :15,
  },

  cardHeaderHome2: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 3,
    marginBottom :10,
    marginLeft :15,
    marginRight :15,
  },
  
  containerIb: {
    flexGrow: 1,
    backgroundColor: Colors.mainColor,
    height: 140,
    width: win.width+40,
    marginTop: -30,
    borderRadius: 50,
    marginLeft: -20,
    marginRight: -20,
  },
   border: {
    borderRadius: 50,
  },
   formLogin : {
    textAlign: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
  },

  viewFlat:{
    borderColor: '#EEEEEE',
    borderBottomWidth: 1 ,
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent'
  },
   TouchableOpacityStyle: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 5,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    zIndex: 9999, position: 'absolute'
  },
  viewData:{
    flexDirection:'row',
  },
  imageAvatar:{
    width:222,
    height:222,
    borderRadius:50
  },
  titleText:{
    fontWeight: '600',
    marginLeft: 20,
    marginTop:5,
    fontSize: 14,
  },
  textLink:{
    color: 'blue',
    fontSize:12,
    marginLeft:0,
    textAlign:'center',
    marginTop: 5
  },

  textNormal:{
    color: '#000000',
    fontSize:12,
    marginLeft: 20,
    marginTop: 5
  },

    textRight:{
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'flex-end'
  },

  
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#EEEEEE',
    height: 30,
    borderRadius: 10,
    width: '100%'
  },
 
  ImageStyle: {
    padding: 10,
    height:20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
 
  viewContent:{
    flex:1,
  },
  textInput:{
    height:40,
    paddingLeft :6
  },
    button: {
    marginLeft:3,
    marginRight:3,
    width:170,
    backgroundColor:Colors.mainColor,
    color:Colors.mainColor,
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 13,
    bottom:0,
    borderWidth: 1,
    borderColor: Colors.mainColor,
  },
  cancelButton:{
    backgroundColor:Colors.mainColor,
    color: Colors.mainColor,
  },
  confirmButton:{
    backgroundColor:Colors.mainColor,
    color: Colors.mainColor,
  },

  buttonDefault: {
    marginLeft:3,
    marginRight:3,
    width:170,
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 13,
    bottom:0
  },

  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  buttonTextDefault: {
    fontSize:16,
    fontWeight:'500',
    color:'#d42f3c',
    textAlign:'center'
  },
  bottom: {
  flex: 1,
  justifyContent: 'flex-end',
  marginBottom: 36
},

  card: {
	backgroundColor: '#ffffff',
	padding: 15,
	borderRadius: 10,
	shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 3,
	flexDirection: 'row',
	alignItems: 'center',
	marginBottom :10,
},
 card2: {
	backgroundColor: '#ffffff',
	padding: 15,
	height: 100,
	borderRadius: 10,
	shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 3,
	flexDirection: 'row',
	alignItems: 'center',
	marginBottom :10,
},
cardSearch: {
	backgroundColor: '#ffffff',
	padding: 15,
	borderRadius: 10,
	shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 3,
	flexDirection: 'row',
  alignItems: 'center',
	marginTop:-110,
	marginBottom :10,
	marginLeft :15,
	marginRight :15,
},

cardProfile: {
	backgroundColor: '#ffffff',
	padding: 5,
	borderRadius: 10,
	shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 3,
	flexDirection: 'row',
	marginTop:15,
	marginBottom :10,
	marginLeft :15,
	marginRight :15,
},
cardMap: {
	backgroundColor: '#ffffff',
	padding: 1,
	shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    elevation: 3,
	flexDirection: 'row',
	marginTop:1,
	marginBottom :1,
	marginLeft :1,
	marginRight :1,
},
listData: {
	backgroundColor: '#ffffff',
	padding: 5,
	shadowColor: '#000',
	flexDirection: 'row',
	marginTop:5,
	marginBottom :5,
	marginLeft :0,
	marginRight :2,
},
cardList: {
	backgroundColor: '#ffffff',
	padding: 5,
	borderRadius: 10,
	shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 3,
	flexDirection: 'row',
	marginTop:5,
	marginBottom :5,
	marginLeft :15,
	marginRight :15,
},
cardProfileHeader: {
	backgroundColor: '#ffffff',
	padding: 5,
	borderRadius: 10,
	shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 3,
	flexDirection: 'row',
  alignItems: 'center',
	marginTop:-110,
	marginBottom :10,
	marginLeft :15,
	marginRight :15,
},
  icon: {
    paddingLeft: 10,
  },
  iconLeft: {
    paddingLeft: 10,
    paddingRight: -60,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120,
    color:'white'
  },
  imageCarousel: {
    width :110,
    height :65,
    marginRight :7,
    marginLeft :2,
    marginTop :5,

  },



  tabBarInfoContainerBorder: {
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
    borderColor:'#bababa', 
    borderWidth:1,
    overflow: 'hidden',
    shadowColor: '#bababa',
    shadowRadius: 20,
    shadowOpacity: 1,
  	flexDirection: 'row',

    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 13,
    zIndex:-1,
  },
  tabBarInfoContainer: {
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  	flexDirection: 'row',

    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
    zIndex:-1,
  },
  tabBarInfoText: {
    fontSize: 13,
    marginLeft:0,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'left',
  },
  textGray: {
    color: '#9c9c9c',
  },
  textBlack: {
    color: '#686869',
  },
  image2: {
    flex: 1,
    alignSelf: 'stretch',
    width: win.width,
    height: win.height,
},
left10: {
  marginLeft:10,
},
right10: {
  marginRight:10,
},
textSmall: {
  fontSize: 11,
},
loginScreenContainer: {
  flex: 1,
},
logoText: {
  fontSize: 40,
  fontWeight: "800",
  marginTop: 150,
  marginBottom: 30,
  textAlign: 'center',
},
textLogo: {
  fontSize: 40,
  fontWeight: "800",
  marginTop: 150,
  marginBottom: 30,
  textAlign: 'center',
},
loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 5,
  marginRight: 5,
  marginTop: 5,
  marginBottom: 5,

},
bgDefault: {
  backgroundColor: '#d42f3c',
},
bgWhite: {
  borderWidth: 1,
  backgroundColor: '#ffffff',
  borderColor: '#d4d5d6',
},
bgFb: {
  backgroundColor: '#4074bd',
  borderWidth: 1,
  borderColor: '#4074bd',
},

buttonLogin :{
  width: win.width-30,
  borderRadius: 30,
  borderBottom: 20,
},
widthFull : {
  width: win.width-30,
},

scroll: {
  backgroundColor: 'white',
},
userRow: {
  alignItems: 'center',
  flexDirection: 'row',
  paddingBottom: 15,
  paddingLeft: 15,
  paddingRight: 15,
  paddingTop: 15,
},
userImage: {
  marginRight: 12,
},
listItemContainer: {
  borderBottomWidth: 0.5 ,
  borderColor: '#ECECEC',
  padding :10,
},
listItemContainerNoBorder: {
  borderBottomWidth: 0,
  borderColor: '#ECECEC',
  padding :10,
},
listAvatarContainer: {
  borderBottomWidth: 0,
  borderColor: '#ECECEC',
  padding :50,
},
textBold: {
  fontWeight :'bold'
},






header: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: '#03A9F4',
  overflow: 'hidden',
},
bar: {
  marginTop: 28,
  height: 32,
  alignItems: 'center',
  justifyContent: 'center',
},
title: {
  backgroundColor: 'transparent',
  color: 'white',
  fontSize: 18,
},
scrollViewContent: {
  marginTop: 200,
},
gridContainer: {
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  padding: 10,
  marginBottom: 20
},
gridContainerText: {
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  padding: 8,
  marginBottom: 7
},
carousel: {
  flex: 1,
},
item: {
  flex: 1,
},
imageBackground: {
  flex: 2,
  borderRadius: 15,
},
rightTextContainer: {
  marginLeft: 'auto',
  marginRight: -2,
  backgroundColor: 'rgba(49, 49, 51,0.5)',
  padding: 0,
  marginTop: 0,
  borderTopLeftRadius: 5,
  height :170,
  width :win.width - 10,
  borderBottomLeftRadius: 5
},
centerText: {
  marginTop: 50,
  justifyContent:'center',
  alignItems: 'center',
},
rightTextTitle: { color: 'white', fontWeight:'bold', fontSize:24 },
lowerContainer: {
  flex: 1,
  margin: 1
},

contentText: { 
  fontSize:16,
  color: '#ffffff',

}
};