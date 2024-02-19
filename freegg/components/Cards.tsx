import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

type CardProps = {
    title: string
    thumbnail: string
}

export default function Card({ title, thumbnail }: CardProps) {
    return (
        <View style={cardstylesTest.container}>
            <Image
                source={{uri: thumbnail }}
                style={{ width: 100, height: 100}}
            />
            <Text>{title}</Text>
        </View>
    )
}

const cardstylesTest = StyleSheet.create({
    container: {
      flex: 1,
      flexGrow:1,
      backgroundColor: '#fff',
    //   width: '100%',
    //   height:'100%',
      paddingLeft:10,
      paddingBottom:15,
      margin:10,
      borderColor: "black",
      borderStyle: "solid",
      borderWidth: 1,
      alignItems: "center"
      
    },
  });
  