import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { Black, DarkGray, Gray, Green } from '../Color';
import { Icon } from '@rneui/themed';


const Timer = (props) => {
  
    const handleIncrementCounter = () => {
        props.setCount((prevState) => prevState + 15);
    };
  
    const handleDecrementCounter = () => {
      if (props.count > 15) {
        props.setCount((prevState) => prevState - 15);
      }
    };

  return (
    <View>
        <View style={styles.container}>
            
            <TouchableOpacity 
            onPress={handleDecrementCounter} 
            style={[styles.but,
            props.count <= 15 ? styles.butOff :
             null]}>

              <Icon type='ionicon' name='remove' size={18} color='white'/>
            
            </TouchableOpacity>
            <Text style={styles.text}>{props.count} Secondes</Text>
            <TouchableOpacity onPress={handleIncrementCounter} style={styles.but}>
              <Icon type='ionicon' name='add' size={18} color='white'/>
            </TouchableOpacity>
            </View>
    </View>
  )
}

export default Timer

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'55%',
        justifyContent:'space-evenly',
        alignSelf:'center',
    },
    text:{
        fontSize:14,
        alignSelf:'center',
        backgroundColor:'white',
        paddingVertical:6,
        paddingHorizontal:10,
        borderRadius:5,
        borderColor:Gray,
        borderWidth:2,
        color:Black

    },
    text0:{
      fontSize:17,
      fontWeight:'600',
      color:'white'
    },
    but:{
        backgroundColor:Green,
        paddingVertical:3,
        paddingHorizontal:3,
        borderColor:'#22222220',
        borderRadius:20,
        alignSelf:'center'
    },
    butOff:{
      backgroundColor:DarkGray,
      paddingVertical:3,
      paddingHorizontal:3,
      borderColor:Gray,
      alignSelf:'center'
  },
})