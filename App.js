import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React,{useState, useEffect} from 'react';

import {firebase} from './config';



import Login from "./src/Login";
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import Header from "./component/Header";
import GdList from "./src/GdList";
import Waiting from "./src/status/Waiting";
import Accepted from "./src/status/Accepted";
import Rejected from "./src/status/Rejected";
import Closed from "./src/status/Closed";
import Detail from "./src/status/Detail";

const Stack =createStackNavigator();

function App(){
  const [initializing, setInitializing] =useState(true);
  const [Admin,setAdmin]=useState();

  //Handle user state changes

  function onAuthStateChanged(Admin){
    setAdmin(Admin);
    if (initializing) setInitializing(false);
  }
  useEffect(()=>{
    const subscriber =firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[]);
  if (initializing) return null;

  if(!Admin){
    return(
      <Stack.Navigator>
        <Stack.Screen
        name='Login'
        component={Login}
        options={{headerTitle:()=> <Header name='E-GD(Admin)'/>,
        headerStyle:{
          height:120,
          borderBottomRightRadius:130,
          backgroundColor:'#0FE005',
          shadowColor:'#000',
          elevation:25
        }
        }}
        />
        {/* //Registration */}

        <Stack.Screen
        name='Registration'
        component={Registration}
        options={{headerTitle:()=> <Header name='E-GD(Admin)'/>,
        headerStyle:{
          height:120,
          borderBottomLeftRadius:50,
          borderBottomRightRadius:250,
          backgroundColor:'#0FE005',
          shadowColor:'#000',
          elevation:25
        }
        }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Dashboard'
        component={Dashboard}
        options={{headerTitle:()=> <Header name='E-GD(Admin)'/>,
        headerStyle:{
          height:120,
          borderBottomLeftRadius:50,
          borderBottomRightRadius:250,
          backgroundColor:'#F08E12',
          shadowColor:'#000',
          elevation:25
        }
        }}
        />
        <Stack.Screen
        name='GdList'
        component={GdList}
        options={{headerTitle:()=> <Header name='E-GD(Admin)'/>,
        headerStyle:{
          height:120,
          borderBottomLeftRadius:50,
          borderBottomRightRadius:250,
          backgroundColor:'#F08E12',
          shadowColor:'#000',
          elevation:25
        }
        }}
        />
        <Stack.Screen
        name='Waiting'
        component={Waiting}
        options={{headerTitle:()=> <Header name='E-GD'/>,
        headerStyle:{
          height:120,
          borderBottomLeftRadius:50,
          borderBottomRightRadius:250,
          backgroundColor:'#10E510',
          shadowColor:'#000',
          elevation:25
        }
        }}
        />
        <Stack.Screen
        name='Accepted'
        component={Accepted}
        options={{headerTitle:()=> <Header name='E-GD'/>,
        headerStyle:{
          height:120,
          borderBottomLeftRadius:50,
          borderBottomRightRadius:250,
          backgroundColor:'#10E510',
          shadowColor:'#000',
          elevation:25
        }
        }}
        />
        <Stack.Screen
        name='Rejected'
        component={Rejected}
        options={{headerTitle:()=> <Header name='E-GD'/>,
        headerStyle:{
          height:120,
          borderBottomLeftRadius:50,
          borderBottomRightRadius:250,
          backgroundColor:'#10E510',
          shadowColor:'#000',
          elevation:25
        }
        }}
        />
        <Stack.Screen
        name='Closed'
        component={Closed}
        options={{headerTitle:()=> <Header name='E-GD'/>,
        headerStyle:{
          height:120,
          borderBottomLeftRadius:50,
          borderBottomRightRadius:250,
          backgroundColor:'#10E510',
          shadowColor:'#000',
          elevation:25
        }
        }}
        />
         <Stack.Screen
        name='Detail'
        component={Detail}
        options={{headerTitle:()=> <Header name='E-GD'/>,
        headerStyle:{
          height:120,
          borderBottomLeftRadius:50,
          borderBottomRightRadius:250,
          backgroundColor:'#10E510',
          shadowColor:'#000',
          elevation:25
        }
        }}
        />
    </Stack.Navigator>
  );
}

export default ()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}