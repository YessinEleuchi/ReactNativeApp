import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import {Icon} from '@rneui/themed'
import { Gray, Green, Cream, Black } from '../Color'
import { useTranslation } from 'react-i18next';

const CreateHead = (props) => {
const { t } = useTranslation();
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.submain}>
        <Text style={styles.subtitle}>
          {
          props.type=='vocab'?t('vocab'):
          props.type=='gram'?t('grammar'):
          props.type=='exp'?t('expression'):
          null
          }
          </Text>
          <Text style={styles.subtitle}>{t('element')} : {props.count}</Text>
      </View>
    </View>
  )
}

export default CreateHead

const styles = StyleSheet.create({
  main:{
    justifyContent:'space-around',
    paddingHorizontal:15,
    backgroundColor:Cream,
    borderBottomColor:Gray,
    borderBottomWidth:1,
    paddingVertical:10
  },
  title:{
    fontSize:22,
    fontWeight:'400',
    paddingVertical:5,
    color:Black
  },
  subtitle:{
    fontSize:14,
    fontWeight:'300',
    color:'grey',
  }
  ,submain:{
    justifyContent:'space-between',
    flexDirection:'row',
    paddingVertical:5,
  }
})