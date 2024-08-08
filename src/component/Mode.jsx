import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { Black, DarkGray, Gray, Green } from '../Color'


const Mode = (props) => {
  return (
    <TouchableOpacity style={styles.main} onPress={props.action}>
        <View style={styles.container}>
          <Text style={styles.Title}>{props.title}</Text>
          <Text style={styles.paragraph}>{props.content}</Text>
            <Text><Icon type='ionicon' name='arrow-forward' size={24} color={Green} /></Text>
        </View>
    </TouchableOpacity>
  )
}

export default Mode

const styles = StyleSheet.create({
    Title:{
      fontSize:20,
      fontWeight:'400',
      color:Black
    },
    paragraph:{
      fontSize:14,
      color:DarkGray,
      paddingVertical:20,
      textAlign:'justify',
    },
    container:{
    margin:20,
    justifyContent:'space-evenly',
    borderBottomColor:Gray,
    borderBottomWidth:2,
    }
})