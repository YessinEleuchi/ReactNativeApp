import { View, Text, StatusBar, ScrollView, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundImage } from '@rneui/base'
import TopHeader from '../../component/TopHeader'
import { useTranslation } from 'react-i18next';
import { Black, Cream, Gray, Green } from '../../Color'


const bg = require('../../assets/bg/bglight.png')

const fr = require('../../assets/icons/ic_fr.png');
const eng = require('../../assets/icons/ic_gb.png');
const user = require('../../assets/icon.png');
const ListContent = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) =>{
  i18n.changeLanguage(lang)
  }

  return (
    <View style={{ flex: 1, backgroundColor: Cream }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle='dark-content' backgroundColor={Cream} />
        <View style={{height: StatusBar.currentHeight}}></View>
        <TopHeader Header={t("myacc")} color={Black} align='center' action={() => navigation.goBack()} />
        <BackgroundImage source={bg} style={{ height: '100%' }}>
          <View style={{height:80,backgroundColor:Cream,borderBottomColor:Gray,borderBottomWidth:1}}>
          <View style={{alignItems:'center',flexDirection:'row',marginHorizontal:20}}>
          <Image source={user} style={{height:60, width:60,borderRadius:50}}/>
          <View style={{marginLeft:20}}>
          <Text style={{color:Green, fontSize:16,fontWeight:'500',}}>Brian</Text>
          <Text style={{color:Black, fontSize:14,}}>brian@super</Text>
          </View>
          </View>
          </View>
          <View style={styles.main}> 
          <Text style={{color:Green, fontSize:16,}}>{t('lang')}</Text>
          <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer} onPress={()=>changeLanguage('en')}> 
              <Image source={eng} style={styles.icon}/>
              <Text>{t('eng')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={()=>changeLanguage('fr')}> 
              <Image source={fr} style={styles.icon}/>
              <Text>{t('fra')}</Text>
            </TouchableOpacity>
          </View>
          </View>
        </BackgroundImage>
      </SafeAreaView>
    </View>
  )
}

export default ListContent


const styles = StyleSheet.create({  
  main:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: Cream,
    paddingTop:10,
  }
  ,
  icon:{
    height:72/2.5,
    width:108/2.5,
},
  container:{
    justifyContent:'space-between',
    width:'60%',
    alignSelf:'center',
    flexDirection:'row',
    paddingVertical:10,
  },
  iconContainer:{
    alignItems:'center',
    justifyContent:'center'
  }
})
