import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gray } from '../Color'

const Separtor = () => {
  return (
    <View style={styles.main}>
    </View>
  )
}

export default Separtor

const styles = StyleSheet.create({
  main:{
    height:3,
    width:'80%',
    backgroundColor:Gray,
    marginVertical:10,
    alignSelf:'center',
    borderRadius:5
  }
})