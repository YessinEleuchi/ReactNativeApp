import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Ionicons } from 'react-native-vector-icons'
import Slider from '@react-native-community/slider';

const turtle=require('../assets/icons/slow.png')
const rabbit=require('../assets/icons/fast.png')


export default function LearnHeader(props) {
  return (
    <View style={styles.main}>
        <View style={styles.top}>
            <Ionicons name='close' size={24} color={'white'} onPress={()=>router.back()}/>
            <View>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.subText}>{props.subtitle}</Text>
            </View>
            <Ionicons name='close' size={24} color={'white'}/>
        </View>
        <View>
        <View style={styles.iconsContainer}> 
            <Image source={turtle} style={styles.icon}/>
            <Image source={rabbit} style={styles.icon}/>
        </View>
        <Slider
  style={{width: '90%', alignSelf:'center'}}
  minimumValue={0}
  maximumValue={1}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
  value={0.5}
  />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        paddingHorizontal:10,
        flex:0.15,
        justifyContent:'space-between',
    },
    text:{
        color:'#fff',
        fontWeight:'600',
        fontSize:16,
        textAlign:'center'
    },
    subText:{
        color:'#ddd',
        fontWeight:'300',
        fontSize:14,
        textAlign:'center'
    },
    top:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    iconsContainer:{
        justifyContent:'space-between',
        width:'80%',
        flexDirection:'row',
        alignSelf:'center',
    },
    icon:{
        height:30,
        width:30,
    },

})