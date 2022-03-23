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
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderRadius: 30,
          marginTop: 5,
          marginBottom:5,
          color: 'black',
          overflow: 'hidden',
        },

//ForgotPassword
        forgotImage:{
          height: '25%', 
          width: '50%',
          margin:'10%',
          marginTop:'-50%',
        },
        forgotBox:{
          borderColor: 'black',
          borderRadius: 10,
          borderWidth:3,
          justifyContent: "center",
          alignItems: "center",
          paddingTop:15,
          paddingBottom:40,
          margin: 10,
          width: "90%",
        },
        forgotText:{
          fontSize:30,
          fontWeight:'bold',
          margin:10,
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
          borderWidth: 1,
          borderColor: "red",
         
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



});