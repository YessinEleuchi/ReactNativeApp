import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { Slider } from '@rneui/base'

const turtle=require('../assets/icons/slow.png')
const rabbit=require('../assets/icons/fast.png')


const SpeedSlider = (props) => {
  return (
    <View>
        <View style={styles.iconsContainer}> 
            <Image source={turtle} style={styles.icon}/>
            <Image source={rabbit} style={styles.icon}/>
        </View>
        <Slider
            style={{width: '90%', alignSelf:'center'}}
            minimumValue={0.01}
            maximumValue={0.59}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            value={props.SpeechSpeed}
            onSlidingComplete={(value) => props.setSpeechSpeed(value.toFixed(2))}
            thumbTintColor='#fff'
            thumbStyle={{width:20,height:20}}
            />
    </View>
  )
}

export default SpeedSlider

const styles = StyleSheet.create({
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