import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, TextInput, ScrollView, Image, Text,  View } from 'react-native';

export default function App() {

  const [pressedCount, setPressedCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
 <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'What is your name?'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setName(text)}
      />






      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
      </Text>
      <Button
      color = "blue"
        title='Press me'
        onPress={() => setPressedCount(pressedCount +1)} 
disabled={pressedCount >= 10}
      />
    

  
         <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text>Hello world!!</Text>
      <Text style={{fontSize: 20}}>This is my first React Native App!</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  buttonBorder:{
    backgroundColor:'grey'
    
  }
});
