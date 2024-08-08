import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopHeader from '../../../component/TopHeader';
import { DarkGreen, Green, Tomato, White } from '../../../Color';
import { BackgroundImage } from '@rneui/base';
import SpeedSlider from '../../../component/SpeedSlider';
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
import { useTranslation } from 'react-i18next';
const bg = require('../../../assets/bg/background.png');
import ModalPronunciation from '../../../popup/ModalPronunciation';

const PracticeScreen = props => {
  const { t } = useTranslation();

  //modal
  const [isVisiblePronunciation, setIsVisiblePronunciation] = useState(true);
  const togglePronunciation = () => {
    setIsVisiblePronunciation(!isVisiblePronunciation);
  };

  //params
  const params = props.params;
  const lang = props.lang;
  const ttsContent = props.ttsContent;
  const SttContent = props.SttContent;
  const setTimerDone = props.setTimerDone;
  const toggleModal = props.toggleModal;
  const isPaused = props.isPaused;
  const isVisible = props.isVisible;
  const nav = props.nav;

  //color
  const colorAnim = useSharedValue(0);
  const correctAnim = () => {
    colorAnim.value = withTiming(1, { duration: 1000 });
  };

  const falseAnim = () => {
    colorAnim.value = withTiming(2, { duration: 1000 });
  };
  const resetAnim = () => {
    colorAnim.value = withTiming(0, { duration: 1000 });
  };
  const styles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorAnim.value,
      [0, 1, 2],
      [DarkGreen, Green, Tomato],
    );
    return { backgroundColor };
  });
  //Speed slider
  const [SpeechSpeed, setSpeechSpeed] = useState(0.3);
  //------------------------------

  //Main

  const [topWord, setTopWord] = useState('');
  const [bottomWord, setBottomWord] = useState('');
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
  const startRecording = async lang => {
    try {
      await Voice.start(lang);
    } catch (error) {
      console.log('error', error);
    }
  };
  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.log('error', error);
    }
  };

  const clear = () => {
    setInput('');
  };
  // Main function

  //---TTS
  useEffect(() => {
    setBottomWord('-'.repeat(topWord.length));
    setTtsStatus('init');
    resetAnim();
  }, [topWord])
  useEffect(() => {
    if (ttsStatus === 'finished') {
      Voice.start(lang == 0 ? 'fr-FR' : lang == 1 ? 'en-US' : lang == 2 ? i % 2 == 0 ? 'en-US' : 'fr-FR' : null)
    }
    if (input.split(' ').length >= topWord.split(' ').length) {
      setBottomWord(input);
      if (input == topWord) {
        correctAnim();
        clear();
        Voice.stop();
      } else {
        falseAnim();
        clear();
        Voice.stop();
      }
    }
  }, [ttsStatus, input]);
  const tts = () => {
    Tts.setDefaultRate(SpeechSpeed);
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
    Tts.speak(topWord)
  };

  return (
    <Animated.View style={styles}>
      <ModalPronunciation
        isVisible={isVisiblePronunciation}
        toggle={togglePronunciation}
        words={params.words}
        lang={params.lang}
        setWord={setTopWord}
      />
      <MyModal toggle={toggleModal} isVisible={isVisible} navigation={props.navigation} />
      <StatusBar barStyle="light-content" backgroundColor={DarkGreen} />
      <BackgroundImage source={bg} style={{ height: '100%', width: '100%' }}>
        <SafeAreaView style={{ flex: 1 }}>
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
            headerLeft="list"
            action={togglePronunciation}
            actionRight={toggleModal}
            align="center"
            color={White}
            iconColor={White}
            headerRight="close"
            bgColor={null}
          />
          {
            //disable until code
            /* <SpeedSlider
            setSpeechSpeed={setSpeechSpeed}
            SpeechSpeed={SpeechSpeed}
          /> */
          }
    
          <LearnContent
            top={topWord}
            bottom={bottomWord}
            type={params.type}
            lang={params.lang}
            SpeechSpeed={SpeechSpeed}
            action={tts}
          />
        </SafeAreaView>
      </BackgroundImage>
    </Animated.View>
  );
};

export default PracticeScreen;
