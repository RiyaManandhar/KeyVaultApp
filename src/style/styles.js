import { StyleSheet } from 'react-native';
/**
 * Global Stylesheet.
 * used to store stylesheet information for entities which are used throughout the application.
 */
export default StyleSheet.create({
//common
        container:{ 
          flex: 1,
          alignItems: 'center',
          

        },
        bgImgStyle: {
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems:'center',
        },
        logo:{
          height: '21%', 
          width: '50%',
          margin:'5%',
          resizeMode: 'contain',
        },
        
//ClickableButton.js
        clickableBtn: {
          width: "80%",
          borderRadius: 25,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: '5%',
          backgroundColor: "#213826",
        },
        buttonText:{
          color:'white',
          fontWeight: '700',
          fontSize:16
        },

//LoginScreen 
        finger:{
          display:'flex',
          flexDirection:'row',
        },
        fingerprintImage:{
          height:30,
          width:30,
          marginTop:'5%',
          marginRight:'-3%'
        },
        tapFingerText: {
          color:'black',
          fontSize:18,
          margin:'5%',
          fontWeight:'bold'
        },
        createNewAndForgotPassword: {
          color:'black',
          fontSize:16,
          margin:'3%',
          fontWeight:'bold'
        },

//TextBoxInput & TextBoxPassword plus (Registraion Screen's confirm password)
        inputView: {
          width: "80%",
        },
        textInput:{
          backgroundColor:'rgba(255, 255,255,0.5)',
          textAlign:'center',
          paddingHorizontal: '1%',
          paddingVertical: '4.25%',
          borderRadius: 30,
          marginTop: 5,
          marginBottom:5,
          color: 'black',
          overflow: 'hidden',
        },

//ForgotPassword
        forgotImage:{
          marginTop:'-45%',
          height: '40%', 
          width: '60%',
          margin:'5%',
          resizeMode: 'contain',
        },
        forgotBox:{
          borderColor: 'black',
          borderRadius: 10,
          borderWidth:3,
          justifyContent: "center",
          alignItems: "center",
          paddingTop:5,
          paddingBottom:15,
          margin:'5%',
          width: "90%",
        },

//EncryptionKeyScreen.js
        containerEncryption:{
          flex: 1,
          alignItems: 'center',
          marginTop:'-40%',
        },
        encrypBox:{
          borderColor: 'black',
          borderRadius: 10,
          borderWidth:3,
          justifyContent: "center",
          alignItems: "center",
          paddingTop:15,
          paddingBottom:15,
          margin: '5%',
          width: "90%",
         // marginTop:'5%',
        },
        text: {
          fontSize: 18,
          margin:5,
        },

//HomeScreen.js
        containerList:{
          flex:1,
          //backgroundColor:'#DAF7E4',
          backgroundColor:'#d0f4dc',
          //justifyContent:'center',
          alignItems: 'center',
        },
        listContainer:{
          marginTop: 20,
          marginBottom: 60,
          padding: 0,
          paddingBottom: 15,
          width:'90%',
        },
        searchInput:{
          height: 48,
          borderRadius: 5,
          overflow: 'hidden',
          backgroundColor: 'white',
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
          paddingLeft: 16
        },
        sortText:{
          fontSize: 18,
          marginLeft: 30,
          paddingLeft: 0,
        },

//GenerateScreen.js
        generateContainer:{
         flex:1,
        //alignItems:'center',
         // marginVertical: 16,
          backgroundColor:'#d0f4dc',
          paddingTop:40,
        },
        //same text named text
        generateText:{
          fontSize: 18,
          marginLeft: 30,
          paddingLeft: 0,
        },
        passwordLengthText:{
          alignSelf: 'center',
          fontSize: 36,
          fontWeight: "bold",
        },

//ToggleSwitch.js
        switchView:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 30,
          paddingVertical: 12,
        },

//LengthSlider
        lengthSlider:{
          marginHorizontal: '5%',
  
        },

//EntityView.js for drawing padded box around entity, and positioning text and circle
        entityContainer: {
          backgroundColor: "white",
          margin: 8,
          borderRadius: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 12,
          paddingLeft: 12,
          borderBottomColor: "#E0E0E0",
          borderBottomWidth: 2,
        },
        entityName:{
          fontSize: 24,
          marginBottom: 4,
          paddingLeft: 24,
        },
        entityEmail:{
          fontSize: 18,
          paddingLeft: 24,
        },

//FloatingActionButton to position FAB button
        fab: {
          right: 20,
          bottom: 25,
        },


//AddPassword Screen
        adds:{
          marginTop:'10%',
          width:'95%',
          alignItems:'center',
        },
        picker:{
          marginVertical: 30,
          width: 300,
          padding: 10,
        },
        pick:{
          fontSize:18,
          fontWeight:'bold',
        },
        colorView:{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: 'rgba(255, 255,255,0.5)',
          width:'80%',
          borderRadius:25,
          maxHeight:'20%',
          
        },

//View Password Screen
        titleText:{
          fontSize: 18,
          textAlign: "center",
          flex: 1,
          fontWeight: "bold",
          margin:5,
        },
        textAreaContainer: {
          paddingHorizontal: 12,
        },
        textArea:{
          textAlignVertical: "top",
          height: 120,
          justifyContent: "flex-start",
          maxHeight: 60,
        },

///ProfileScreen
userInfoSection: {
  width: "80%",
},
row: {
  flexDirection: 'row',
  marginBottom: 30,
  backgroundColor:'rgba(255, 255,255,0.5)',
  textAlign:'center',
  paddingHorizontal: 15,
  paddingVertical: 10,
  borderRadius: 30,
  overflow: 'hidden',
},
userText:{
  marginLeft:20,
  color:'black',
  fontSize:20,
},
avatarImage:{
  marginBottom:'10%',
  //marginTop:10,
  backgroundColor:'rgba(255, 255,255,0.5)',

},

///editProfilescreen

commandButton: {
  padding: 15,
  borderRadius: 10,
  backgroundColor: '#FF6347',
  alignItems: 'center',
  marginTop: 10,
},
panel: {
  padding: 20,
  backgroundColor: '#FFFFFF',
  paddingTop: 20,
  // borderTopLeftRadius: 20,
  // borderTopRightRadius: 20,
  // shadowColor: '#000000',
  // shadowOffset: {width: 0, height: 0},
  // shadowRadius: 5,
  // shadowOpacity: 0.4,
},
header: {
  backgroundColor: '#FFFFFF',
  shadowColor: '#333333',
  shadowOffset: {width: -1, height: -3},
  shadowRadius: 2,
  shadowOpacity: 0.4,
  // elevation: 5,
  paddingTop: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
},
panelHeader: {
  alignItems: 'center',
},
panelHandle: {
  width: 40,
  height: 8,
  borderRadius: 4,
  backgroundColor: '#00000040',
  marginBottom: 10,
},
panelTitle: {
  fontSize: 27,
  height: 35,
},
panelSubtitle: {
  fontSize: 14,
  color: 'gray',
  height: 30,
  marginBottom: 10,
},
panelButton: {
  padding: 13,
  borderRadius: 10,
  backgroundColor: '#FF6347',
  alignItems: 'center',
  marginVertical: 7,
},
panelButtonTitle: {
  fontSize: 17,
  fontWeight: 'bold',
  color: 'white',
},
action: {
  flexDirection: 'row',
  marginTop: 10,
  marginBottom: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5,
},
actionError: {
  flexDirection: 'row',
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#FF0000',
  paddingBottom: 5,
},
t: {
  flex: 1,
  marginTop: Platform.OS === 'ios' ? 0 : -12,
  paddingLeft: 10,
  color: '#05375a',
},

});