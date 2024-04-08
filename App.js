import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput,Button,Linking} from 'react-native';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
    const openWhatsApp = () => {
      if (phoneNumber) {
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        Linking.openURL(whatsappUrl);
      }
      else {
        alert("insert phone number")
      }
    };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.h1}>WhatsappME!</Text>
        
      </View>
      <TextInput
          style={styles.textInput}
          placeholder={` Enter number here with ISD code`}
          placeholderTextColor="#888"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          keyboardType="phone-pad"
        />
        <Button title="Open WhatsApp" onPress={openWhatsApp} />
    </View>
  );
};
const styles = StyleSheet.create({
    h1: {
        fontSize: 40,
        fontWeight: 'bold',
        color:'red'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EEE0DD',
      paddingTop: 50,
      height: 400
    },
    textInput: {
      width: '80%',
      height: 40,
      marginVertical: 10,
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: '#fff',
    }
  });
  
export default App;