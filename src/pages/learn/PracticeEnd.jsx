import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopHeader from '../../component/TopHeader'
import { Cream } from '../../Color'
import { useTranslation } from 'react-i18next'

const PracticeEnd = ({route}) => {
    console.log(route.params)
    const { t } = useTranslation();
  return (
    <View style={{flex:1, backgroundColor:Cream}}>
    <SafeAreaView>
        <StatusBar barStyle='dark-content'/>
        <TopHeader Header={params.title} subHeader='Congratulations!' align='center'/>
    </SafeAreaView>
    </View>
  )
}

export default PracticeEnd

const styles = StyleSheet.create({})