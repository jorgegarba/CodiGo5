import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Boton from './src/components/Boton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Boton texto="Click Aqui"
        iconName={"arrow-right"}
        iconSize={15}
        iconColor={"white"}
        fullWidth={true}
        bgColor={"#ccc"}
        action={() => { console.log("click!"); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
