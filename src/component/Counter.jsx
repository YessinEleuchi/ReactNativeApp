import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { White } from '../Color'
import { useTranslation } from 'react-i18next'

const Counter = (props) => {
  const [time, setTime] = useState(props.time);
  const { t } = useTranslation();
    useEffect(() => {
      if (time > 0 && props.pause == false) {
        setTimeout(() => {
          setTime(time - 1);
        }, 1000); 
      }
      if (time == 0){
        setTimeout(() => {
          props.done(true)
        }, 1000);
      }
    }, [time,props.pause]);
  return (
    <View style={{alignContent:'center',alignItems:'center'}}>
        <Text style={styles.Text}>{time}</Text>
        <Text style={[styles.Text,{fontSize:7}]}>{t('sec')}</Text>        
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    Text: {
        color:White,
        fontSize:14,
        fontWeight:'500'
    }
})