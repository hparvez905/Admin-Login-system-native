import { View, Text,StyleSheet,FlatList,TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import {firebase} from '../../config'
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

const Detail = () => {
    const data = [
        { label: 'Waiting', value: 'Waiting' },
        { label: 'Accepted', value: 'Accepted' },
        { label: 'Closed', value: 'Closed' },
        { label: 'Rejected', value: 'Rejected' },
        
      ];
      
        const [value, setValue] = useState(null);
        const [isFocus, setIsFocus] = useState(false);
  
  const [gds,setGds]=useState('')
  const [status,setStatus]=useState('')
   const navigation =useNavigation();
  const gdsRef =firebase.firestore().collection('gd');
  const statusRef =firebase.firestore().collection('gdStatus');

  GdStatus= async (value)=>{
        
    firebase.firestore().collection('gdStatus')
    .doc(firebase.auth().currentUser.uid)
    .set({
        value
        })
        .then(()=>{
            alert('Submitted!')
        })
    .then((error)=>{
        alert(error.message)
    })
.catch((error)=>{
    alert(error.message)
})
}

  useEffect(async ()=>{
    gdsRef
    .onSnapshot(
        querySnapshot => {
            const gds =[]
        querySnapshot.forEach((doc)=>{
            const {gdName} =doc.data()
            const {details} =doc.data()
            const {info} =doc.data()
            const {number} =doc.data()
            const {place} =doc.data()
            const {file} =doc.data()
            const {value} =doc.data()
            gds.push({
                id:doc.id,
                gdName,
                details,
                info,
                number,
                place,
                value,
                file

            })

        })
        setGds(gds)
    }

    )

},[])
useEffect(async ()=>{
    statusRef
    .onSnapshot(
        querySnapshot => {
            const status =[]
        querySnapshot.forEach((doc)=>{
            const {value} =doc.data()
            
            status.push({
                id:doc.id,
                value
                

            })

        })
        setStatus(status)
    }

    )

},[])


  return (
    <View style={{flex:1}}>
          <FlatList
            data={status}
            numColumns={1}
            renderItem={({item})=>(
    
    <View style={styles.container}>
      <Text style={styles.TextInput}  >Status:{item.value}</Text>
     
      
      
    </View>
      
  
            )
            }
            />
    <FlatList
            data={gds}
            numColumns={1}
            renderItem={({item})=>(
    
    <View style={styles.container}>
      <Text style={styles.TextInput}  >Name:{item.gdName}</Text>
      <Text style={styles.TextInput}>Detail:{item.details}</Text>
      <Text style={styles.TextInput}>Info:{item.info}</Text>
      <Text style={styles.TextInput}>Number:{item.number}</Text>
      <Text style={styles.TextInput}>Place:{item.place}</Text>
      <Text style={styles.TextInput}>Value:{item.value}</Text>
     
      
      
    </View>
      
  
            )
            }
            />
             <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Status' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        
            />
            <View style={styles.Button}>
            <TouchableOpacity
      onPress={()=>GdStatus(value) && navigation.navigate('GdList')}
      style={styles.Sbutton}>
        <Text style={{fontWeight:'bold',fontSize:22}}
        >Submit Gd</Text>
      </TouchableOpacity>
            </View>
  
</View>
  )
          }

export default Detail;


const styles=StyleSheet.create({
  container:{
    backgroundColor:'#e5e5e5',
    padding:15,
    borderRadius:15,
    margin:5,
    marginHorizontal:10,
    flexDirection:'column',
    alignItems:'center'
     
  },
  TextInput:{
    paddingTop:10,
    paddingBottom:5,
    width:400,
    fontSize:16,
    marginLeft:50

},
dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  Sbutton:{
    marginTop:50,
    height:70,
    width:250,
    backgroundColor:'#0FE005',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
    
},
Button:{
    alignItems:'center',

}
  
     
  })