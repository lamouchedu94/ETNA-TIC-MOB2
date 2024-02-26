import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


type GameDetails = {
  title: string
  thumbnail: string
}

export default function Details({ route }: { route: { params: { title: string, thumbnail: string, short_description: string } } }) {
  const { title, thumbnail, short_description } = route.params;
  return (
  <View style={styles.container}>
      <Text>Open up App.tsx to start working on your apaazz!</Text>    
      <StatusBar style="auto" />
      <Text>test</Text>
      <Text>{title}</Text>
      <Text>{short_description}</Text>
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
