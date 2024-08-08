import { View, Text, StatusBar, ScrollView, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundImage } from '@rneui/base'
import TopHeader from '../../component/TopHeader'
import { useTranslation } from 'react-i18next';
import { Black, Cream, Gray, Green } from '../../Color'
import ProgressMenu from '../../component/ProgressMenu'
import { useSelector} from 'react-redux';
import DailyTracker from '../../component/DailyTracker'
import { Stats } from '../../api/user_api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Achievements from '../../component/Achievements'


const bg = require('../../assets/bg/bglight.png')


const Progress = ({ navigation, route }) => {
  const { t } = useTranslation();
  const {value} = useSelector(state => state.progress)
  const [data, setData] = useState(null);
  const [apiData, setApiData] = useState(false);
  const getStat = async () => {
    const token = await AsyncStorage.getItem('token');
    const user = [await AsyncStorage.getItem('user')].map(JSON.parse)[0];
    Stats({token: token,id:user.id}).then((result)=>{
      setData(result.data)
    })
  }
  useEffect(() => {
    getStat()
    if (data != null) {
      setApiData(true)
      }
  },[data])
  return (
    <View style={{ flex: 1, backgroundColor: Cream }}>
      <SafeAreaView style={{ flex: 1 }}>
      <View style={{height: StatusBar.currentHeight}}></View>
        <StatusBar barStyle='dark-content' backgroundColor={Cream} />
        <TopHeader Header={t("myprogress")} color={Black} align='center' action={() => navigation.goBack()} />
        <ProgressMenu/>
          <View style={styles.main}>
            {value=='week'&&apiData==true?<DailyTracker data={data}/>:value=='learn' && apiData==true?<Achievements data={data}/>:null}
          </View>
      </SafeAreaView>
    </View>
  )
}

export default Progress


const styles = StyleSheet.create({  
  main:{
    width:'100%',
    height:'100%',
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
