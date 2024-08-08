import { View, Text, StatusBar, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundImage } from '@rneui/base'
import TopHeader from '../../component/TopHeader'
import { useTranslation } from 'react-i18next';
import { Cream, Green } from '../../Color'
import BottomButton from '../../component/BottomButton'
import LearnItems from '../../component/LearnItems'
import ContentHead from '../../component/ContentHead'
import BottomSheet from '../../popup/BottomSheet'


const bg = require('../../assets/bg/bglight.png')

const ListContent = ({ navigation, route }) => {

  const { t } = useTranslation();
  //Navigation
  const { name, type, id, parent, words  } = route.params;
  const goTo = (params) => {
    navigation.navigate('LearnNav', params)
  }

  const refRBSheet = useRef();

  return (
    <View style={{ flex: 1, backgroundColor: Cream }}>
      <SafeAreaView style={{ flex: 1 }}>
        <BottomSheet refs={refRBSheet} title={name} type={type} parent={parent}/>
        <StatusBar barStyle='dark-content' backgroundColor={Cream} />
        <TopHeader Header={parent=='CatalogNav'?t("catalog"):parent=='InboxNav'?t("inbox"):t("my_lists")} color={Green} headerLeft='arrow-back' iconColor={Green} action={() => navigation.goBack()} />
        <BackgroundImage source={bg} style={{ flex: 1 }}>
          <ContentHead title={name} type={type} action={() => refRBSheet.current.open()}/>
          <ScrollView>
            <LearnItems words={words}/>
          </ScrollView>
        </BackgroundImage>
        <BottomButton 
          type='practice'
          empty={false}
          action={() => goTo({
            type:type,
            name:name,
            id:id,
            words:words,

          })} />
      </SafeAreaView>
    </View>
  )
}

export default ListContent