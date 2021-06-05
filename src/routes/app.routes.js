import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';





import { View,Image } from 'react-native';
import Main from '../Pages/Main'
import Entrada from '../Pages/Entrada'
import Saida from '../Pages/Saida'
import Transferencia from '../Pages/Transferencia'







const App = createStackNavigator();

const AppRoutes = ()=>{


    return (
        <App.Navigator
        
          >
            <App.Screen name="Main" component={Main}/>
            <App.Screen name="Entrada" component={Entrada}/>
            <App.Screen name="Saida" component={Saida}/>
            <App.Screen name="Transferencia" component={Transferencia}/>



            
			
            </App.Navigator>



    
    );
}

export default AppRoutes;