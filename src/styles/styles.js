import { StyleSheet } from 'react-native';
/**
 * Global Stylesheet.
 * used to store stylesheet information for entities which are used throughout the application.
 */
export default StyleSheet.create({
        bgImgStyle: {
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems:'center',
        },
        loginLogo:{
          height: '21%', 
          width: '50%',
          margin:'10%',
        },
        inputView: {
          width: "80%",
        },
        textInput:{
          backgroundColor:'rgba(255, 255,255,0.4)',
          textAlign:'center',
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderRadius: 30,
          marginTop: 5,
          marginBottom:5,
        },
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
        container:{ 
          flex: 1,
          alignItems: 'center',
        },
        footerView:{
          flex: 1,
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20
        },
        footerText:{
          fontSize: 16,
          color: '#002366',
          marginBottom: 15
        },
        footerLink:{
          color: "#002366",
          fontWeight: "bold",
          fontSize: 16
        },
        title:{
          fontSize: 40,
          fontWeight: "bold"
        },
       //
       textEncry: {
          fontSize: 18,
          margin:5,
      },
      insideView:{
        borderColor: 'black',
        borderRadius: 10,
        borderWidth:3,
        justifyContent: "center",
        alignItems: "center",
        paddingTop:15,
        paddingBottom:15,
        margin: 20,
        width: "90%",
      },
      forgotLogo:{
        height: '25%', 
        width: '50%',
        margin:'10%',
        marginTop:'-50%',
      },
      forgot:{
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

      ////./screens/home/HomeScreen.js
      containList:{
        flex:1,
        backgroundColor:'#DAF7E4',
        alignItems: 'center',
      },
      listContainer:{
        marginTop: 20,
        marginBottom: 60,
        padding: 0,
        paddingBottom: 15,
        width:'90%',
      },
      input:{
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
      text:{
        fontSize: 18,
        marginLeft: 30,
        paddingLeft: 0,
      },


});