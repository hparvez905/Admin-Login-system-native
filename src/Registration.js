import { View, Text,TouchableOpacity,TextInput,StyleSheet } from 'react-native'
import React ,{useState}from 'react';
import {firebase} from '../config';


const Registration = () => {
    const [email,setEmail] =useState('')
    const [password,setPassword]=useState('')
    const [aFirstName,setAFirstName]=useState('')
    const [aLastName,setALastName]=useState('')
    const [nid,setNid]=useState('')
    registerUser= async (email,password,aFirstName,aLastName,nid)=>{
        // email verification 
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp:true,
                url:'https://e-gd-5a804.firebaseapp.com',

        })
        .then(()=>{
            alert('Verification email sent !')
        }).catch((error) => {
            alert(error.message)
        })
        .then(()=>{
            firebase.firestore().collection('Admins')
            .doc(firebase.auth().currentUser.uid)
            .set({
                aFirstName,
                aLastName,
                email,
                nid,
                })
            })
            .catch((error)=>{
                alert(error.message)
            })
        
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:23}}>Admin Info</Text>
      <View style={{marginTop:40}}>
        <TextInput
        style={styles.TextInput}
        placeholder='First Name'
        onChangeText={(aFirstName)=> setAFirstName(aFirstName)}
        autoCorrect={false}
        />

        <TextInput
        style={styles.TextInput}
        placeholder='Last Name'
        onChangeText={(aLastName)=> setALastName(aLastName)}
        autoCorrect={false}
        />

    <TextInput
        style={styles.TextInput}
        placeholder='Email'
        onChangeText={(email)=> setEmail(email)}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        />

    <TextInput
        style={styles.TextInput}
        placeholder='Password'
        onChangeText={(password)=> setPassword(password)}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        />
         <TextInput
        style={styles.TextInput}
        placeholder='Id'
        onChangeText={(nid)=> setNid(nid)}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={false}
        />

        

      </View>
      <TouchableOpacity
      onPress={()=>registerUser(email,password,aFirstName,aLastName,nid)}
      style={styles.button}>
        <Text style={{fontWeight:'bold',fontSize:22}}
        >SignUp</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Registration;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:100,
    },
    TextInput:{
        paddingTop:20,
        paddingBottom:10,
        width:400,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:'#000',
        marginBottom:10,
        textAlign:'center'

    },
    button:{
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#00e4d0',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    }


})