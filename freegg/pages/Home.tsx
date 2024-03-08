import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { getAllGames } from '../services/api/request/request';
import { Games } from '../services/api/types/types';import Card from '../components/Cards';
// import { Navigation } from '@react-navigation/native'

export default function Home({ navigation }) {
  const [tabName, setTabName] = useState<Games[]>([])
  const [gamesAlea, setGamesAlea] = useState<Games[]>([])
  const [gameCategories, setGameCategories] = useState<string[]>([])
  //console.log(navigation)
  useEffect(() => {
    getAllGames().then((data) => {
      let tab = []
      for (let i = 0; i < 10; i++) {
        const rndInt = Math.floor(Math.random() * data.length) + 1
        tab.push(data[rndInt])    
      }
    setGamesAlea(tab)
    setTabName(data)
    })
  }, [])
  let temp : string[] = []
  useEffect(() => {
    // let temp : string[] = []
    tabName.map((elem) => {
      if (!temp.includes(elem.genre!)) {
        temp.push(elem.genre)
      }
    })
    setGameCategories(temp)
    
    console.log(gameCategories, temp)
  }, [tabName])

  // const

  const rndInt = Math.floor(Math.random() * tabName.length) + 1
  //console.log(rndInt)
  
  return (
  <View style={Globalstyle.catgories}>
  {/* <Text>Categorie</Text> */}
  <ScrollView style={Globalstyle.container}>
    <Button title='Categorie' onPress={() => navigation.navigate("Categories", {categories: gameCategories})}/>

    <Text>
      <StatusBar style="auto" />
      {gamesAlea.map((elem, i) => {
        
        return (
            <View>
              
              <Card title={elem.title} thumbnail={elem.thumbnail} short_description={elem.short_description} id={elem.id} navigation={navigation} key={i}/>
              {/* <Card key={i} imagelink={elem.thumbnail}></Card> */}
            </View>
          )
      })}
    </Text>
    
  </ScrollView>
  </View>
  );
}


const Globalstyle = StyleSheet.create({
  container: {
    display:'flex',
    // flexDirection:'column',
    backgroundColor: "white",
    width:"100%",
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 1
  },
  catgories: {
    alignItems: "center",
    width:'100%'
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
