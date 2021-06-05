import React, { useState,useContext } from 'react';
import { useNavigation } from '@react-navigation/core';


import { View, Text, StyleSheet,TextInput, TouchableOpacity } from 'react-native';

import api from '../../services/api';
import AuthContext, { AuthProvider } from '../../context/auth';




function Login() {
  const [email, setEmail] = useState('admin');
  const [senha, setSenha] = useState('rio@2021');
  const [errorMsg,setErrorMsg] = useState('');

  const navigation = useNavigation();
  const { signed, user,signIn } = useContext(AuthContext);
  console.log(user)




  async function submit(){

    //Envio das informacoes para a api 
    const params = new URLSearchParams();
    params.append('acao', 'login');
    params.append('usr_login', email);
    params.append('usr_senha', senha);

    try{
      const {data} = await api.post('/login.php',params);
      console.log(data.error_msg)
      if(data.error_msg)
        return setErrorMsg('Usuário ou senha incorretos ')

      signIn({
        usr_login:data.usr_login,
        usr_id:data.usr_id
      })  
      


    }catch(err){
      console.log(err);
    }

    
    

   



  }

  return (
    <View style={ styles.container }>
      <View style={styles.viewTeste}>

      </View>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subTitle}>Entre com o seus dados </Text>

      <Text style={{color:'red',fontSize:15}}>{errorMsg}</Text>
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
    <TouchableOpacity style={styles.buttonLogin} onPress={submit}>
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
    backgroundColor:'#3A7BCD',
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
