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

  useEffect(() => {
    getSpecificGame(id).then((data:Games) => {
      setTab(data)
    })
    
  }, [])
  return (
    <ScrollView>
      <View style={imgStyle.container}>
          <Image
            source={{uri: thumbnail }}
            style={imgStyle.image}
          />
          <Text>{title}</Text>
        <View style={imgStyle.info}>
          <Text>{short_description}</Text>
          <Text>{tab?.description}</Text>
          <Text>{tab?.game_url}</Text>
          <Text>Genre : {tab?.genre}</Text>
          {/* <Text>{tab?.minimum_system_requirements}</Text> */}
          <Text>Platform : {tab?.platform}</Text>
          <Text>Publisher : {tab?.publisher}</Text>
          <Text>Release date : {tab?.release_date}</Text>
          {tab?.screenshots.map((elem, i) => {
            return (
              <Image
                source={{uri: elem.image}}
                style={imgStyle.image}
              />
            )
          })}
        </View>
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
  info : {
    alignContent:'flex-start'
  }

});
