import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import codePush from "react-native-code-push";
let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
const App = () => {

  const onButtonPress = () => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }} >
      <TouchableOpacity style={{ width: 1000, height: 300, backgroundColor: 'pink',alignSelf:'center' }} onPress={onButtonPress} >

      </TouchableOpacity>
      <Text>bách</Text>
      <Text>bách</Text>
      <Text>bách</Text>
      <Text>bách</Text>
      <Text>bách</Text>
      <Text>bách</Text>
      <Text>bách</Text>
      <Text>bách</Text>
    </View>
  )
}

export default codePush(App)