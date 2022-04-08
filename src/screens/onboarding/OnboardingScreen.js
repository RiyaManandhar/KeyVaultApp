import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);



const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        titleStyles={{ color: 'black',marginTop:'-25%', margin:'10%'}}
        subTitleStyles={{color: 'black',marginTop:'-10%',margin:'10%' }}
        pages={[
          {
            backgroundColor: '#8ad2a6',
            image: <Image source={require('../../assets/Images/image1.png')} style={styles.on}/>,
            title: 'Welcome to KeyVault',
            subtitle: 'A Password Manager App that stores and secures your Passwords',
          },
          {
            backgroundColor: '#8ad2a6',
            image: <Image source={require('../../assets/Images/image2.png')} style={styles.on} />,
            title: 'Too many Passwords to remember?',
            subtitle: 'Remember only one master password to access all your applications',
          },
          {
            backgroundColor: '#8ad2a6',
            image: <Image source={require('../../assets/Images/image3.png')} style={styles.on} />,
            title: 'Trusted and Secure',
            subtitle: "Secure all your passwords at one place",
          },
        ]}
       />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  on:{
    height: '100%', 
    width: '100%', 
    marginTop:'-15%',
    marginBottom:'-50%',
   resizeMode: 'contain',
  },


});