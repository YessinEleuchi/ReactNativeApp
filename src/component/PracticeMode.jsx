import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Black, DarkGray, Gray } from '../Color'

const ac=require('../assets/modesSettings/image_settings_imgactivelearning.png')
const ps=require('../assets/modesSettings/image_settings_imgpassivelearning.png')
const gram=require('../assets/modesSettings/image_settings_imgreflexgrammar.png')
const random=require('../assets/modesSettings/image_settings_imgrandom.png')
const pro=require('../assets/modesSettings/image_settings_imgpronounciation.png')
const simon=require('../assets/modesSettings/image_settings_imgsimonsays.png')

const PracticeMode = (props) => {
    const { t } = useTranslation();
  return (
    <View style={styles.main}>
        <Image 
        source={
          props.type=='ac'?ac:
          props.type=='ps'?ps:
          props.type=='ref'?gram:
          props.type=='random'?random:
          props.type=='pronunciation'?pro:
          props.type=='sim'?simon:
          null} 
          style={styles.icon}/>
        <Text style={styles.text}>{
          props.type=='ac'?(t('ac_learning')):
          props.type=='ps'?(t('ps_learning')):
          props.type=='ref'?(t('ref_grammar')):
          props.type=='pronunciation'?(t('pronunciation')):
          props.type=='sim'?(t('simon')):
          null}
          </Text>
        <Text style={styles.subtext}>
        {
          props.type=='ac'?(t('ac_content')):
          props.type=='ps'?(t('ps_content')):
          props.type=='ref'?(t('ref_content')):
          props.type=='pronunciation'?(t('pronunciation_content')):
          props.type=='sim'?(t('sim_content')):
          null}
        </Text>
    </View>
  )
}

export default PracticeMode

const styles = StyleSheet.create({
main:{
  alignItems:'center',
  justifyContent:'space-evenly',
  width:'80%',
  height:'40%',
  alignSelf:'center',
}
,  
icon:{
    width:100,
    height:100
  },
  text:{
    color:Black,
    fontSize:18
  },
  subtext:{
    color:DarkGray,
    textAlign:'center',
  }

})