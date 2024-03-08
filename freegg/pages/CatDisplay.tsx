import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Pressable } from 'react-native';
import { getSpecificCat } from '../services/api/request/request';
import Card from '../components/Cards';
import { Games } from '../services/api/types/types';


export default function CatDisplay({ route, navigation }: { route: { params : { categorie: string}}}) {
    const { categorie } = route.params
    const [tabName, setTabName] = useState<Games[]>([])
    useEffect(() => {
        getSpecificCat(categorie).then((data) => {
            setTabName(data)
        })
        
    }, [])
    // console.log(tabName)
    
    return (
        <View style={Globalstyle.catgories}>
        {/* <Text>Categorie</Text> */}
        <ScrollView style={Globalstyle.container}>
          <Text>
            <StatusBar style="auto" />
            {tabName.map((elem, i) => {
              console.log(elem)
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
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1
  },
  categories: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    width:'100%',
    paddingTop:10
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    paddingTop:10
  }
});

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