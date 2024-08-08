import { StyleSheet,View} from 'react-native'
import React,{useState} from 'react'
import Timer from './SetTimer'
import SwitchBut from './SwitchBut'

const LearningOptions = (props) => {

  return (
    <>
      <Timer/>
      <View style={styles.container}>
      <SwitchBut title='Selected'/>
      {!props.voc?<SwitchBut title='failed'
      />:null}
    </View>
    </>
  )
}

export default LearningOptions

const styles = StyleSheet.create({})