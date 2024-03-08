import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function Categories({ route }: {route: { params: {categories: Array<string>}}}) {
  const { categories  } = route.params
  console.log("holaaaa")
  
    categories.map((elem, i) => {
      console.log(elem)
    })
  
  return (
  
  <View style={styles.container}>
      <View>
        <Text>{categories.map((elem, i) => {
            return elem + "\n"
          })}
      </Text>
      </View>
      <Text></Text>    
      <StatusBar style="auto" />

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
