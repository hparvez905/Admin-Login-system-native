import { View, Text,StyleSheet,FlatList,Pressable } from 'react-native'
import React,{useEffect,useState} from 'react'
import {firebase} from '../../config'
import { useNavigation } from '@react-navigation/native';

const Waiting = () => {
  
  const [gds,setGds]=useState('')
   const navigation =useNavigation();
  const gdsRef =firebase.firestore().collection('gd');

  useEffect(async ()=>{
    gdsRef
    .onSnapshot(
        querySnapshot => {
            const gds =[]
        querySnapshot.forEach((doc)=>{
            const {gdName} =doc.data()
            gds.push({
                id:doc.id,
                gdName,

            })

        })
        setGds(gds)
    }

    )

},[])

  return (
    <View style={{flex:1}}>
    <FlatList
            data={gds}
            numColumns={1}
            renderItem={({item})=>(
    <Pressable style={styles.container}
    onPress={()=>navigation.navigate('Detail',{item})}>
    <View>
      <Text>{item.gdName}</Text>
      
    </View>
      
    </Pressable>
            )
            }
            />
  
</View>
  )
          }

export default Waiting;


const styles=StyleSheet.create({
  container:{
    backgroundColor:'#e5e5e5',
    padding:15,
    borderRadius:15,
    margin:5,
    marginHorizontal:10,
    flexDirection:'row',
    alignItems:'center'
     
  },
  TextInput:{
    paddingTop:10,
    paddingBottom:5,
    width:400,
    fontSize:16,
    marginLeft:50

},
  
     
  })