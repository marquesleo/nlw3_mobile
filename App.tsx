import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import  MapView, {PROVIDER_GOOGLE}  from 'react-native-maps';



export default function App() {
  return (
    <View style={styles.container}>
     
      <MapView style={styles.map} 
        initialRegion={{
        latitude:-22.2310626,
        longitude:-42.5302895,
        latitudeDelta:0.008,
        longitudeDelta:0.008, }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  map:{
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height
  }
});
