import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getSpecificGame } from '../services/api/request/request';
import { useEffect, useState } from 'react';
import { Games } from '../services/api/types/types';import Card from '../components/Cards';


type GameDetails = {
  title: string
  thumbnail: string
}

export default function Details({ route }: { route: { params: { title: string, thumbnail: string, short_description: string, id: number } } }) {
  const { title, thumbnail, short_description, id } = route.params;
  const [tab, setTab] = useState<Games>()

  console.log("hereeee", id)
  useEffect(() => {
    getSpecificGame(id).then((data:Games) => {
      setTab(data)
    })
    
  }, [])
  console.log("here", tab)
  return (
    <ScrollView>
      <View style={imgStyle.container}>
          <Image
            source={{uri: thumbnail }}
            style={imgStyle.image}
          />
        <Text>{title}</Text>
        <Text>{short_description}</Text>
        <Text>{tab?.description}</Text>
      </View>
    </ScrollView>

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
