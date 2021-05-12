import React, { useState } from 'react';

import { View, Text, StyleSheet,TextInput, TouchableOpacity,Alert } from 'react-native';



function Button({title,nameFunction}) {

    
  

  return (
    
      <TouchableOpacity style={styles.button} onPress={nameFunction}>
          <Text style={{color:'white',fontSize:20}}>{title}</Text>
      </TouchableOpacity>

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

export default Button;
