import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { getAllGames } from '../services/api/request/request';
import { Games } from '../services/api/types/types';import Card from '../components/Cards';
;

export default function Home() {
  const [tabName, setTabName] = useState<Games[]>([])
  // const [gamesAlea, setGamesAlea] = useState<Games[]>([])

  useEffect(() => {
    getAllGames().then((data) => {
      setTabName(data)
    })
  }, [])
  
  // const

  return (
  
  <ScrollView style={Globalstyle.container}>
    
    <Text>
      <StatusBar style="auto" />
      {tabName.map((elem, i) => {
        
        return (

            <View>
              <Card title={elem.title} thumbnail={elem.thumbnail} key={i}/>
              {/* <Card key={i} imagelink={elem.thumbnail}></Card> */}
            </View>
          )
      })}
    </Text>
    
  </ScrollView>

  );
}


const Globalstyle = StyleSheet.create({
  container: {
    display:'flex',
    // flexDirection:'column',
    backgroundColor: "white",
    width:"auto",
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 1
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     flexDirection:'row',
//     margin:10
//   },
// });
