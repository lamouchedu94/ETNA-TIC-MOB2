import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Pressable } from 'react-native';



export default function Categories({ route }: {route: { params: {categories: Array<string>}}}) {
  const { categories  } = route.params
  console.log("holaaaa")
  
    categories.map((elem, i) => {
      console.log(elem)
    })
  
  return (
    <ScrollView>
      <View style={styles.container}>       
        {categories.map((elem, i) => {
            return (
              <View style={styles.categories}>
                <Pressable style={styles.buttonStyle}>
                  <Text>{elem + "\n"}</Text>
                </Pressable>
                {/* <Text>{elem + "\n"}</Text> */}
              </View>
            )
          })}
        <StatusBar style="auto" />
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
