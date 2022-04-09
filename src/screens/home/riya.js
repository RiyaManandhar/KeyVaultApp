import React, {useState,useContext,useEffect} from 'react'
import {Alert,ImageBackground,View,KeyboardAvoidingView,TouchableOpacity,Text,Image} from 'react-native';
import styles from '../../style/styles';
import { TextBoxInput } from '../../components/TextBoxInput';
import { ClickableButton } from '../../components/ClickableButton';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

//import ImagePicker from 'react-native-image-crop-picker';
import * as ImagePicker from 'expo-image-picker';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default function ProfileScreen() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [location, setLocation] = useState('')

    const [image, setImage] = useState(null);
   // {require('../../assets/Images/user.png')}

    const onSubmit = () => {
            Alert.alert(
                "Submit Pressed"
            );
        }

        const pickImage = async () => {
            // No permissions request is necessary for launching the image library
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
        
          //  console.log(result);
        
            if (!result.cancelled) {
              setImage(result.uri);
            }
          };
        

    

        const renderContent = () => (
            <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.panelTitle}>Upload Photo</Text>
              <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton} >
              <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={pickImage}>
              <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.panelButton}
        onPress={() => sheetRef.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
          );

        {/*  const renderHeader = () => (
            <View style={styles.header}>
              <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
              </View>
            </View>
          );

          */}
        
          const sheetRef = React.useRef(null);
        const fall=new Animated.Value(1);


        return (
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
                {/* Background  Image*/}
            <ImageBackground style={styles.bgImgStyle} 
                          source={require('../../assets/Images/BgImage.jpg')}>
            

            <BottomSheet
                    ref={sheetRef}
                    snapPoints={[440, 0]}
                    borderRadius={10}
                    renderContent={renderContent}
                   // renderHeader={renderHeader}
                    initialSnap={1}
                    callbackNode={fall}
                    enabledGestureInteraction={true}
            />
      


      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
    }}>
          <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
             //source={require('../../assets/Images/user.png')}
              source={{ uri: image, }}
              
                //style={{height: 120, width: 90}}
                style={{height: 150, width: 150, marginBottom: 100,resizeMode:'contain',}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </Animated.View>
            
            
            

                    <TextBoxInput placeholder={'Full Name'} textSetter={setFullName} value={fullName} autoCorrect={false}/>
                    <TextBoxInput placeholder={'E-mail'} textSetter={setEmail} value={email} autoCorrect={false}/>
                    <TextBoxInput placeholder={'Phone Number'} textSetter={setPhoneNo} value={phoneNo} autoCorrect={false}/>
                    <TextBoxInput placeholder={'Location'} textSetter={setLocation} value={location} />

               <ClickableButton buttonText={"Submit"} onPressMethod={onSubmit}/>
           
              </ImageBackground>
              </KeyboardAvoidingView>
        );
}
