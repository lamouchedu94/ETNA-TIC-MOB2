import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Pressable } from 'react-native';



export default function CatDisplay({ route }: { route: { params : { categorie: string}}}) {
    const { categorie } = route.params
    return <Text>{categorie}</Text>
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
