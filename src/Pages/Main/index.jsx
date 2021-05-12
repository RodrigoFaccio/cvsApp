import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';


import { View, Text, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { MaterialIcons } from '@expo/vector-icons';
import Button from '../../Components/Button';



function Main() {
  const navigation = useNavigation();

    async function entrada(){
        navigation.navigate('Entrada');
    }
    async function saida(){
      navigation.navigate('Saida');
        
    }
  return (
    <View style={ styles.container }>
        <TouchableOpacity style={styles.button} onPress={entrada}>
          <Text style={{color:'white',fontSize:20}}>Entrada manual  <MaterialIcons  name="input" size={24} color="black" /></Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button,{backgroundColor:'#F8AC67'}]} onPress={saida}>
          <Text style={{color:'white',fontSize:20}}>Saída manual  <Ionicons name="exit-outline" size={24} color="black" /></Text>
         
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button,{backgroundColor:'#586E8A'}]} onPress={()=>{navigation.navigate('Transferencia')}}>
          <Text style={{color:'white',fontSize:20}}>Transferencia  <MaterialCommunityIcons name="cog-transfer" size={24} color="black" /></Text>
         
      </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
    
    
  },
  button:{
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
    backgroundColor:'#3A7BCD',
    marginTop:20,
    width:'70%',
    height:60,
}

 
  
  
  
});

export default Main;
