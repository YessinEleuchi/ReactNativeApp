import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopHeader from '../../../component/TopHeader';
import {DarkGreen, White} from '../../../Color';
import {BackgroundImage} from '@rneui/base';
import LearnContent from '../../../component/LearnContent';
import MyModal from '../../../popup/Modal';
import Tts from 'react-native-tts';
import {useTranslation} from 'react-i18next';
const bg = require('../../../assets/bg/background.png');

const Active = props => {
  const {t} = useTranslation();
//------------------------------
const params = props.params
const lang = props.lang
const ttsContent = props.ttsContent
const SttContent = props.SttContent
const timerDone = props.timerDone
const setTimerDone = props.setTimerDone
const toggleModal = props.toggleModal
const isPaused = props.isPaused
const isVisible = props.isVisible
const nav = props.nav
// Main function

  const [topWord, setTopWord] = useState('');
  const [bottomWord, setBottomWord] = useState('');
  const [progression, setProgression] = useState(0);

  const [ttsStatus, setTtsStatus] = useState('init');

  useEffect(() => {
    Tts.addEventListener('tts-start', _event => setTtsStatus('started'));
    Tts.addEventListener('tts-finish', _event => {setTtsStatus('finished'),setProgression(360)});
    Tts.addEventListener('tts-cancel', _event => setTtsStatus('cancelled'));
  }, []);


  //Passive
  const [i, setI] = useState(0);
  Tts.setDefaultRate(0.3);

const [TopState, setTopState] = useState(0);
const [BottomState, setBottomState] = useState(0);

  useEffect(() => {
    if (ttsContent.length > 0) {
      if (i < ttsContent.length && isPaused == false) {
        if (TopState == 0 && BottomState == 0 && ttsStatus == 'init') {
          setTopWord(ttsContent[i]);
          setBottomWord('-'.repeat(SttContent[i].length)); //don't forget to add spaces between words
          Tts.setDefaultLanguage(
            lang == 0
              ? 'fr-FR'
              : lang == 1
              ? 'en-US'
              : lang == 2
              ? i % 2 == 0
                ? 'en-US'
                : 'fr-FR'
              : null,
          )
          Tts.speak(ttsContent[i]).then(() => {
            setTopState(1);
          });
        }
        if (TopState == 1 && BottomState == 0 && ttsStatus == 'finished') {
          setTimeout(() => {
          }, 1000);
          setTtsStatus('init');
          Tts.setDefaultLanguage(
            lang == 0
              ? 'en-US'
              : lang == 1
              ? 'fr-FR'
              : lang == 2
              ? i % 2 == 0
                ? 'fr-FR'
                : 'en-US'
              : null,
          );
          setBottomWord(SttContent[i]);
          Tts.speak(SttContent[i]).then(() => {
            setBottomState(1);
          });
        }
        if (TopState == 1 && BottomState == 1 && ttsStatus == 'finished') {
          setTopState(0);
          setBottomState(0);
          setProgression(1)
          setTtsStatus('init');
          setI(i < ttsContent.length ? i + 1 : i);
          setTimeout(() => {
          }, 1000);
        } 
      }
      if (i == ttsContent.length) {
        setI(0);
      }
    }
  }, [ttsContent, i, isPaused, TopState, BottomState,ttsStatus]);

  return (
    <View style={{backgroundColor:DarkGreen}}>
      {timerDone == true 
        ? nav.replace('PracticeType', params)
        : null}
      <MyModal toggle={toggleModal} isVisible={isVisible} navigation={props.navigation} />
      <StatusBar barStyle="light-content" backgroundColor={DarkGreen} />
      <BackgroundImage source={bg} style={{height: '100%', width: '100%'}}>
        <SafeAreaView style={{flex: 1}}>
          <TopHeader
            Header={params.title}
            subHeader={
              params.listType == 'vocab'
                ? t('vocab')
                : params.listType == 'gram'
                ? t('grammar')
                : params.listType == 'exp'
                ? t('expression')
                : null
            }
            headerLeft={'close'}
            action={toggleModal}
            align="center"
            color={White}
            iconColor={White}
            headerRight={'time'}
            time={params.time}
            setDone={setTimerDone}
            Pause={isPaused}
            bgColor={null}
          />
          <LearnContent
            top={topWord}
            navigation={props.navigation}
            bottom={bottomWord}
            type={params.type}
            lang={params.lang}
            action={toggleModal}
            progress={progression}
          />
        </SafeAreaView>
      </BackgroundImage>
    </View>
  );
};

export default Active;

const styles = StyleSheet.create({});
