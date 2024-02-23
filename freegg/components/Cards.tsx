import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from "../pages/Details";
//import { Link } from 'react-router-dom'

type CardProps = {
    title: string
    thumbnail: string
}
const Stack = createNativeStackNavigator()

const details = async (gameId :string) => {
    const gDetails = await details(gameId)
    
}

export default function Card({ title, thumbnail }: CardProps) {
    return (
        <View>
            <View style={cardStyles.container}>
                <View>
                    <Image
                        source={{uri: thumbnail }}
                        style={cardStyles.image}
                    />
                    <Text>{title}</Text>

                </View>
            </View>
        </View>
    )
}

const cardStyles = StyleSheet.create({
    container: {
      flexDirection:"column",
      flexGrow:1,
      backgroundColor: '#fff',
      width: '100%',
    //   height:'100%',
      paddingLeft:10,
      paddingTop:15, 
      paddingBottom:15,
      margin:10,
      borderColor: "black",
      borderStyle: "solid",
      borderWidth: 1,
      alignItems: "center"
      
    },
    image: {
        width:100,
        height:100,
        marginRight:10,
        display:'flex',
        flexDirection:'row'
    },

  });
  