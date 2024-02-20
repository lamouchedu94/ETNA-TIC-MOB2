import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

type CardProps = {
    title: string
    thumbnail: string
}

export default function Card({ title, thumbnail }: CardProps) {
    return (
        <View style={cardStyles.container}>
            <Image
                source={{uri: thumbnail }}
                style={cardStyles.image}
            />
            <Text>{title}</Text>
        </View>
    )
}

const cardStyles = StyleSheet.create({
    container: {
      flexDirection:"row",
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
        marginRight:10
    }
  });
  