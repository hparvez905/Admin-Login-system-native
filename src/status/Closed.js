import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Closed = () => {
  return (
    <View  style={styles.container}>
      <Text>No Data Found</Text>
    </View>
  )
}

export default Closed;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:20,
        justifyContent:'center'
    },
    
       
    })