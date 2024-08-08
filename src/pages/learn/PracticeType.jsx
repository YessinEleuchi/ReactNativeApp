import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PracticeContent from '../../component/PracticeContent'
import TopHeader from '../../component/TopHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Black, Cream, DarkGreen } from '../../Color'

const PracticeType = (props) => {
  params=props.route.params
  return (
    <View style={{backgroundColor:Cream,height:'100%'}}>
    <SafeAreaView>
      <TopHeader 
      Header={params.title}
      headerLeft='arrow-back' 
      align='center'
      color={Black}
      action={() => props.navigation.goBack()}
      />
      </SafeAreaView>
      <PracticeContent
      type={params.type}
      nav={props.navigation}
      title={params.title}
      words={params.words}
      listType={params.listType}
      />
    </View>
  ) 
}

export default PracticeType

const styles = StyleSheet.create({})