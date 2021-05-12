import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import colors from'../styles/colors';
import Login from '../Pages/Login';
import Main from '../Pages/Main';
import Entrada from '../Pages/Entrada';
import Saida from '../Pages/Saida';
import Transferencia from '../Pages/Transferencia/idex';

const stackRoutes  = createStackNavigator();

const AppRoutes:React.FC = ()=>(
    <stackRoutes.Navigator
        screenOptions={{
            cardStyle:{
                backgroundColor:colors.white
            },
        }}
    >

       
    <stackRoutes.Screen
            name="Login"
            component={Login}
    />
    <stackRoutes.Screen
            name="Main"
            component={Main}
            
    />
    <stackRoutes.Screen
            name="Entrada"
            component={Entrada}
    />
     <stackRoutes.Screen
            name="Saida"
            component={Saida}
    />
     <stackRoutes.Screen
            name="Transferencia"
            component={Transferencia}
    />
    
    
    </stackRoutes.Navigator>
)

export default AppRoutes;