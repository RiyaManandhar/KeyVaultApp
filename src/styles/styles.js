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
          margin: 5,
        },
        loginBtn: {
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
        container:{ flex: 1,
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 10
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
        button: {
          width: "100%",
          borderRadius: 25,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: '5%',
          backgroundColor: "#213826",
      },
      title:{
          fontSize: 40,
          fontWeight: "bold"
      },
       


});