import React, { useState } from 'react';

import { View, Text, StyleSheet,TextInput, TouchableOpacity,useRef } from 'react-native';
import Button from '../../Components/Button';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';





function Saida() {
    const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [fornecedor, setFornecedor] = useState();
  const [nota, setNota] = useState();
  const [datePicker, setDatePicker] = useState(new Date());
  const [date, setDate] = useState(datePicker);
  const [solicitado, setSolicitado] = useState();


  const [mode, setMode] = useState('date');
  const [picker, setPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    setPicker(false);
  };


  

  

  
  return (
    <View style={ styles.container }>
        <Text style={{fontSize:40}}>Saída Manual</Text>
      <View style={styles.viewTeste}>

      </View>
      <TextInput
        style={styles.input}
        placeholder="Produto"
        onChangeText={produto => setProduto(produto)}
        defaultValue={produto}
      /> 
      
     <TextInput
      style={styles.input}
      placeholder="Quantidade "
      keyboardType = 'numeric'
      onChangeText={quantidade => setQuantidade(quantidade)}
      defaultValue={quantidade}
    /> 
    
   <Picker
    style={styles.picker}
  selectedValue={selectedLanguage}
  placeholder="Endereço"
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Endereço" value="java" />
  <Picker.Item label="Estoque 1" value="js" />
  <Picker.Item label="Estoque 2" value="js" />
  <Picker.Item label="Estoque 3" value="js" />
  
  
</Picker>

    <View style={{marginLeft:-200,marginTop:15}}>
        <Text style={{fontSize:15,color:'#b0adad'}}>Data</Text>
        <DatePicker
          onPress={()=>setPicker(!picker)}
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate={datePicker}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />

      {picker && (<DateTimePicker
          testID="dateTimePicker"
          value={datePicker}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />)}
      
    </View>
    <Picker
    style={styles.picker}
  selectedValue={solicitado}
  placeholder="Endereço"
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Solicitado Por" value="java" />
  <Picker.Item label="Rodrigo" value="js" />
  <Picker.Item label="Cristiano" value="js" />
  <Picker.Item label="Ronaldo" value="js" />
  
  
</Picker>
    
     
    
    
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

export default Saida;
