import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Rejected = () => {
  return (
    <View  style={styles.container}>
      <Text>No Data found</Text>
    </View>
  )
}

export default Rejected;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:20,
        justifyContent:'center'
    },
    
       
    })