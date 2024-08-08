import { StyleSheet, Text, View, Dimensions,Image } from 'react-native'
import React, { useEffect } from 'react'
import {LineChart, PieChart} from 'react-native-chart-kit'
import { Black, Blue, Cream, Gray, Green, Orange, Tomato } from '../Color'
import { useTranslation } from 'react-i18next';

const gold = require('../assets/icons/ic_medaille_or.png')
const silver = require('../assets/icons/ic_medaille_argent.png')
const bronze = require('../assets/icons/ic_medaille_or_bronze.png')
const Achievements = (props) => {
    const { t } = useTranslation();
    const medals=props.data.medals
    const words =props.data.words
  return (
    <View style={styles.main}>
        <View style={styles.container}>
        <Text style={styles.title}>{t("medals")}</Text>
        </View>
        <View style={styles.medals}>
        <View style={styles.medalsContainer}>
        <Text style={styles.medalTitle}>{t('bronze')}</Text>
        <Image source={bronze} style={styles.icon}/>
        <Text style={styles.number}>{medals["bronze"]}</Text>
        </View>
        <View style={styles.medalsContainer}>
        <Text style={styles.medalTitle}>{t('gold')}</Text>
        <Image source={gold} style={styles.icon}/>
        <Text style={styles.number}>{medals["gold"]}</Text>
        </View>
        <View style={styles.medalsContainer}>
        <Text style={styles.medalTitle}>{t('silver')}</Text>   
        <Image source={silver} style={styles.icon}/>
        <Text style={styles.number}>{medals["silver"]}</Text>
        </View>
        </View>
        <View style={styles.container}>
        <Text style={styles.title}>{t("totalPractice")}</Text>
        </View>
        <View style={styles.words}>
        <View style={styles.wordsContainer}>
                <Text style={styles.title}>{t('pending')}</Text>
                <Text style={styles.number}>{words["pending"]}</Text>
            </View>  
            <View style={styles.wordsContainer}>
                <Text style={styles.title}>{t('new')}</Text>
                <Text style={styles.number}>{words["new"]}</Text>
            </View>    
              
            <View style={styles.wordsContainer}>
                <Text style={styles.title}>{t('acquired')}</Text>
                <Text style={styles.number}>{words["acquired"]}</Text>
            </View>    
        </View>
      </View>
  )
}

export default Achievements

const styles = StyleSheet.create({
main:{
  alignItems:'center',
  width:'100%',
  height:'100%'
},
container:{
  alignItems:'center',
  justifyContent:'space-between',
  width:'90%',
  paddingVertical:10,
  marginBottom:20,
  borderBottomColor:Gray,
  borderBottomWidth:2,
},
legend:{
  fontSize:12,
  fontWeight:'400',
  color:Green,
  marginTop:10,
  marginBottom:30
},
title:{
  fontSize:16,
  fontWeight:'500',
  color:Black,
},
medalTitle:{
  fontSize:14,
  fontWeight:'500',
  color:Black,
  marginBottom:10
},
number:{
  fontSize:14,
  fontWeight:'500',
  color:Black,
},
medals:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  padding:10
},
words:{
  flexDirection:'row',
},
wordsContainer:{
  alignItems:'center',
  justifyContent:'center',
  marginHorizontal:10
},
medalsContainer:{
  alignItems:'center',
  justifyContent:'center',
},
icon:{
  height:80,
  width:80,
  marginHorizontal:10,
  marginBottom:10
}
})