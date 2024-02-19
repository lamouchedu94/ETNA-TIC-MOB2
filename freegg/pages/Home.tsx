import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { getAllGames } from '../services/api/request/request';
import { Games } from '../services/api/types/types';;

export default function Home() {
  const [tabName, setTabName] = useState<Games[]>([])

  useEffect(() => {
    getAllGames().then((data) => {
      setTabName(data)
    })
  }, [])
  
  return (
  
  <ScrollView style={{ flex:1, flexDirection:'column', backgroundColor: "white"}}>
    <Text>
    <Text>Open up App.tsx to start working on your apaazzssp!</Text>    
      <StatusBar style="auto" />
      {tabName.map((elem, i) => {
        return <Text key={i}>{elem.title + "\n"}</Text>
      })}
    </Text>
    
  </ScrollView>

//   <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your apaazzssp!</Text>    
//       <StatusBar style="auto" />
//       {tabName.map((elem, i) => {
//         return <Text key={i}>{elem.title}</Text>
//       })}
//     </View>

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
