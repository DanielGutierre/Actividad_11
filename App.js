import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';

export default function App() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getMovies = async () => {
    
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
      console.log(json)
    } catch (error) {
      console.error(error);
    
    }
  }
 



 useEffect(() => {
  getMovies();
}, []);


  return (
    <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}</Text>
          )}
        />
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
