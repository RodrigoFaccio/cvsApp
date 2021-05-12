import React, { useState } from 'react';

import { View, Text, StyleSheet,TextInput, TouchableOpacity } from 'react-native';



function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={ styles.container }>
      <View style={styles.viewTeste}>

      </View>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subTitle}>Entre com o seus dados </Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={email => setEmail(email)}
        defaultValue={email}
      /> 
      <TextInput
      style={styles.input}
      placeholder="Senha"
      onChangeText={senha => setSenha(senha)}
      defaultValue={senha}
    />
    <TouchableOpacity style={styles.buttonLogin}>
      <Text style={styles.textButton}>Login</Text>
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
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color:'black',
  },
  subTitle:{
  },
  head:{
    flex:1,
  },
  input:{
    height: 40,
    width:'90%',
    marginTop:20,
    borderBottomColor:'black',
    borderBottomWidth:1,
    
  },
  buttonLogin:{
    backgroundColor:'#00BFFF',
    justifyContent:'center',
    alignItems:'center',
    width:200,
    height:50,
    marginTop:20,
    borderRadius:100  
  },
  textButton:{
    justifyContent:'center',
    alignItems:'center',
    color:'white',
    fontSize:18,



  },
  
  
  
});

export default Login;
