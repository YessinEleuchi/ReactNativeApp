import React, {useState, useEffect} from 'react';
import Pronunciation from './modes/Pronunciation';
import Active from './modes/Active';
import Passive from './modes/Passive';
const PracticeScreen = props => {

  //modal
  const [isVisiblePronunciation, setIsVisiblePronunciation] = useState(true);
  const togglePronunciation = () => {
    setIsVisiblePronunciation(!isVisiblePronunciation);
  };

  //params
const nav = props.navigation;
  const params = props.route.params;
  const List = params.words;
  const lang = params.lang;

  //timer
  const [isPaused, Pause] = useState(false);
  const [timerDone, setTimerDone] = useState(false);
  //modal
  const [isVisible, setIsVisible] = useState(false);
  const toggleModal = () => {
    setIsVisible(!isVisible);
    Pause(!isPaused);
  };

  //------------------------------

  //Main

  //--Content list

  const [ttsContent, setTtsContent] = useState([]);
  const [SttContent, setSttContent] = useState([]);
  useEffect(() => {
    const updateLists = () => {
      const newTtsContent = [];
      const newSttContent = [];
      if (lang === 0) {
        List.forEach(el => {
          newTtsContent.push(el.french);
          newSttContent.push(el.english);
        });
      } else if (lang === 1) {
        List.forEach(el => {
          newTtsContent.push(el.english);
          newSttContent.push(el.french);
        });
      } else if (lang === 2) {
        List.forEach((el, index) => {
          if (index % 2 === 0) {
            newTtsContent.push(el.english);
            newSttContent.push(el.french);
          } else {
            newTtsContent.push(el.french);
            newSttContent.push(el.english);
          }
        });
      }
      setTtsContent(newTtsContent);
      setSttContent(newSttContent);
    };
    updateLists();
  }, []);
  return (
    <>
      {params.type == 'pronunciation' || params.type == 'sim' ? (
        <Pronunciation
          params={params}
          lang={lang}
          ttsContent={ttsContent}
          SttContent={SttContent}
          toggleModal={toggleModal}
          togglePronunciation={togglePronunciation}
          navigation={props.navigation}
        />
      ) : params.type == 'ac' || params.type == 'ref' ? (
        <Active
          params={params}
          lang={lang}
          ttsContent={ttsContent}
          SttContent={SttContent}
          timerDone={timerDone}
          isPaused={isPaused}
          isVisible={isVisible}
          nav={nav}
          setTimerDone={setTimerDone}
          toggleModal={toggleModal}
          navigation={props.navigation}
        />
      ) : params.type == 'ps' ? (
        <Passive
          params={params}
          lang={lang}
          ttsContent={ttsContent}
          SttContent={SttContent}
          timerDone={timerDone}
          isPaused={isPaused}
          isVisible={isVisible}
          nav={nav}
          setTimerDone={setTimerDone}
          toggleModal={toggleModal}
          navigation={props.navigation}
        />
      ) : null}
    </>
  );
};

export default PracticeScreen;
