import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import {firebase} from '../config'
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
    const navigation =useNavigation()
    const [aName,setAName]=useState('')

    // change password
    const changePassword=()=>{
        firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
        .then(()=>{
            alert('Password reset email sent')
        }).catch((error)=>{
            alert(error)
        })
    }

    useEffect(()=>{
        firebase.firestore().collection('Admins')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot)=>{
            if (snapshot.exists){
                setAName(snapshot.data())
            }
            else{
                console.log('user does not exits')
            }
        })
    },[])
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>
        Welcome  {aName.aFirstName} {aName.aLastName} Sir
       
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('GdList')}
        style={styles.button}
        >
            <Text style={{fontWeight:'bold',fontSize:22}}>Gd List</Text>
        </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>
        {
            changePassword()}}
      style={styles.passButton}
      >
        <Text style={{fontSize:20}}>
            Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>{firebase.auth().signOut()}}
      style={styles.button}
      >
        <Text style={{fontSize:22,fontWeight:'bold'}}>
            Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Dashboard;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:100,
    },
    button:{
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#50EDF1',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    },
    passButton:{
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#50EDF1',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
       
    }


})