import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopHeader from '../../../component/TopHeader';
import {DarkGreen, Green, Tomato, White} from '../../../Color';
import {BackgroundImage, Button} from '@rneui/base';
import LearnContent from '../../../component/LearnContent';
import MyModal from '../../../popup/Modal';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolateColor,
  withTiming,
} from 'react-native-reanimated';
import Tts from 'react-native-tts';
import Voice from '@react-native-community/voice';
import {useTranslation} from 'react-i18next';
const bg = require('../../../assets/bg/background.png');

const PracticeScreen = props => {
  const {t} = useTranslation();
  const params = props.params;
  const lang = props.lang;
  const ttsContent = props.ttsContent;
  const SttContent = props.SttContent;
  const timerDone = props.timerDone;
  const setTimerDone = props.setTimerDone;
  const toggleModal = props.toggleModal;
  const isPaused = props.isPaused;
  const isVisible = props.isVisible;
  const nav = props.nav;

  //color
  const colorAnim = useSharedValue(0);
  const correctAnim = () => {
    colorAnim.value = withTiming(1, {duration: 1000});
  };

  const falseAnim = () => {
    colorAnim.value = withTiming(2, {duration: 1000});
  };
  const resetAnim = () => {
    colorAnim.value = withTiming(0, {duration: 1000});
  };
  const styles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorAnim.value,
      [0, 1, 2],
      [DarkGreen, Green, Tomato],
    );
    return {backgroundColor};
  });
  //Main

  //text to speech
  const [ttsStatus, setTtsStatus] = useState('init');

  useEffect(() => {
    Tts.addEventListener('tts-start', _event => setTtsStatus('started'));
    Tts.addEventListener('tts-finish', _event => setTtsStatus('finished'));
    Tts.addEventListener('tts-cancel', _event => setTtsStatus('cancelled'));
  }, []);

  //Speech recognition
  const [input, setInput] = useState('');

  useEffect(() => {
    Voice.onSpeechResults = speechResultsHandler;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const speechResultsHandler = e => {
    const text = e.value[0];
    setInput(text);
  };

  const clear = () => {
    setInput('');
  };
  // Main function

  const [topWord, setTopWord] = useState('');
  const [bottomWord, setBottomWord] = useState('');

  //Active
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
          );
          Tts.speak(ttsContent[i]).then(() => {
            setTopState(1);
          });
        }
        if (TopState == 1 && BottomState == 0 && ttsStatus == 'finished') {
          Voice.start(
            lang == 0
              ? 'en-US'
              : lang == 1
              ? 'fr-FR' 
              : lang == 2
              ? i % 2 == 0
                ? 'fr-FR'
                : 'en-US'
              : null,
          )};
          if (input.length > 0) {
            console.log(input);
          if (input.split(' ').length == SttContent[i].split(' ').length) {
            console.log(input);
            setBottomWord(input);
            if (input == SttContent[i]) {
              correctAnim();
              clear();
              setBottomWord(input);
              Voice.stop();
              setBottomState(1);
            } else {
              setBottomWord(input);
              falseAnim();
              clear();
              Voice.stop();
              setBottomState(1);
            }
        }}
        if (TopState == 1 && BottomState == 1 && ttsStatus == 'finished') {
          setTopState(0);
          setBottomState(0);
          setTtsStatus('init');
          setI(i < ttsContent.length ? i + 1 : i);
          setTimeout(() => {}, 1000);
        }
      }
      if (i == ttsContent.length) {
        setI(0);
      }
    }
  }, [ttsContent, i, isPaused, TopState, BottomState, ttsStatus,input]);

  return (
    <Animated.View style={styles}>
      {timerDone == true ? nav.replace('PracticeType', params) : null}
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
            bottom={bottomWord}
            type={params.type}
            lang={params.lang}
          />
        </SafeAreaView>
      </BackgroundImage>
    </Animated.View>
  );
};

export default PracticeScreen;

const styles = StyleSheet.create({});
