import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


type GameDetails = {
  title: string
  thumbnail: string
}

export default function Details({ route }: { route: { params: { title: string, thumbnail: string, short_description: string } } }) {
  const { title, thumbnail, short_description } = route.params;
  return (
  <View style={imgStyle.container}>
      
        <Image
          source={{uri: thumbnail }}
          style={imgStyle.image}
        />
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

const imgStyle = StyleSheet.create({
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
      width:200,
      height:200,
      marginRight:10,
      display:'flex',
      flexDirection:'row'
  },

});
