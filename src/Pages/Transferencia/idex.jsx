import React, { useState } from 'react';

import { View, Text, StyleSheet,TextInput, TouchableOpacity,useRef } from 'react-native';
import Button from '../../Components/Button';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';





function Transferencia() {
    const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [fornecedor, setFornecedor] = useState();
  const [nota, setNota] = useState();
  const [datePicker, setDatePicker] = useState(new Date());
  const [date, setDate] = useState(datePicker);
  const [solicitado, setSolicitado] = useState();
  const [deposito, setDeposito] = useState();



  const [mode, setMode] = useState('date');
  const [picker, setPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    setPicker(false);
  };


  

  

  
  return (
    <View style={ styles.container }>
        <Text style={{fontSize:40}}>Transferencia</Text>
     <View style={{marginTop:30}}>
     <Text style={{textTransform: 'uppercase',fontSize:20}}>Material : Abraçadeira fixa</Text>
     <Text style={{textTransform: 'uppercase',fontSize:20}}>Deposito : Gaveteiro-01</Text>


     </View>
      
     
    
   <Picker
    style={styles.picker}
  selectedValue={selectedLanguage}
  placeholder="Endereço"
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Novo deposito" value="-1" />
  <Picker.Item label="Estoque 1" value="1" />
  <Picker.Item label="Estoque 2" value="2" />
  <Picker.Item label="Estoque 3" value="3" />
  
  
</Picker>

    
<TextInput
      style={styles.input}
      placeholder="Quantidade"
      keyboardType = 'numeric'
      onChangeText={quantidade => setQuantidade(quantidade)}
      defaultValue={quantidade}
    /> 
    
     
    
    
    <TouchableOpacity style={styles.buttonLogin} onPress={()=>{navigation.navigate('Main')}}>
      <Text style={styles.textButton}>Salvar</Text>
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
    borderBottomWidth:0.5,
    
  },
  buttonLogin:{
    backgroundColor:'#3A7BCD',
    justifyContent:'center',
    alignItems:'center',
    width:200,
    height:50,
    marginTop:20,
    borderRadius:10  
  },
  textButton:{
    justifyContent:'center',
    alignItems:'center',
    color:'white',
    fontSize:18,



  },
  picker:{
      width:'95%',
      fontSize:25,
      borderBottomColor:'black',
    borderBottomWidth:0.5,
  },
  
  

 
  
  
  
});

export default Transferencia;
