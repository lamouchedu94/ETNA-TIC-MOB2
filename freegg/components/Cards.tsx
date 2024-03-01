import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { Link } from "react-router-native";



type CardProps = {
    title: string
    thumbnail: string
    short_description: string
    navigation: any
}
const Stack = createNativeStackNavigator()

function Test() {
    console.log("ça marche")
    return <Text>ça marche</Text>
}


export default function Card({ title, thumbnail, navigation, short_description}: CardProps) {
    return (
        <View>
            <View style={cardStyles.container}>
                
                    <Pressable onPress={Test}>
                        <Image
                            source={{uri: thumbnail }}
                            style={cardStyles.image}
                        />
                    </Pressable>
                    <Button title={title} onPress={() => navigation.navigate("Details", {title: title, thumbnail: thumbnail, short_description: short_description})} />
                    {/* <Text>{title}</Text> */}
            </View>
        </View>
    )
}

const cardStyles = StyleSheet.create({
    
    container: {
      flexDirection:"column",
      flexGrow:1,
      backgroundColor: '#fff',
      width: 335,
    //   width: '100%',
    //   height:'100%',
      paddingLeft:10,
      paddingTop:15, 
      paddingBottom:15,
      margin:10,
      borderColor: "black",
      borderStyle: "solid",
      borderWidth: 1,
      alignItems: "center",
      textAlign: "center"
      
    },
    
    image: {
        width:100,
        height:100,
        marginRight:10,
        display:'flex',
        flexDirection:'row'
    },

  });
  