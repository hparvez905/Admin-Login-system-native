import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GdList = () => {
    const navigation =useNavigation()
  return (
    <View>
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Waiting')}
        style={styles.button}
        >
            <Text style={{fontWeight:'bold',fontSize:20}}>Waiting Gd</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('Accepted')}
        style={styles.button}
        >
            <Text style={{fontWeight:'bold',fontSize:22}}>Accepted Gd</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('Rejected')}
        style={styles.button}
        >
            <Text style={{fontWeight:'bold',fontSize:22}}>Rejected Gd</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('Closed')}
        style={styles.button}
        >
            <Text style={{fontWeight:'bold',fontSize:22}}>Closed Gd</Text>
        </TouchableOpacity>
        <TouchableOpacity 
      onPress={()=>{firebase.auth().signOut()}}
      style={styles.button}
      >
        <Text style={{fontSize:22,fontWeight:'bold'}}>
            Sign Out</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default GdList;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:20,
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