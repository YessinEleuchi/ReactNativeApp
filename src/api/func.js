import {CatalogLists} from '../api/user_api';
import Tts from 'react-native-tts';

export const getList = async (token, type) => {
  vocab = [];
  gram = [];
  exp = [];
  return new Promise((resolve, reject) => {
    CatalogLists({token: token})
      .then(result => {
        result.data.map(item => {
          if (
            type == 'catalog'
              ? item.type == 0 && item.is_public == 1
              : type == 'inbox'
              ? item.type == 0 && item.is_public == 0 && item.learner_id == null
              : type == 'lists'
              ? item.type == 0 && item.is_public == 0 && item.trainer_id == null
              : null
          ) {
            vocab.push({
              id: item.id,
              name: item.name,
              type: item.status,
              words: item.words.length,
              words_content: item.words,
              state: item.words
                .map(w => w.state)
                .includes((1 && 2) || (0 && 1) || (0 && 2) || 1)
                ? 'incomplete'
                : item.words.map(w => w.state).includes(2)
                ? 'complete'
                : 'new',
            });
          } else if (
            type == 'catalog'
              ? item.type == 2 && item.is_public == 1
              : type == 'inbox'
              ? item.type == 2 && item.is_public == 0 && item.learner_id == null
              : type == 'lists'
              ? item.type == 2 && item.is_public == 0 && item.trainer_id == null
              : null
          ) {
            gram.push({
              id: item.id,
              name: item.name,
              type: item.status,
              words: item.words.length,
              words_content: item.words,
              state: item.words
                .map(w => w.state)
                .includes((1 && 2) || (0 && 1) || (0 && 2) || 1)
                ? 'incomplete'
                : item.words.map(w => w.state).includes(2)
                ? 'complete'
                : 'new',
            });
          } else if (
            type == 'catalog'
              ? item.type == 1 && item.is_public == 1
              : type == 'inbox'
              ? item.type == 1 && item.is_public == 0 && item.learner_id == null
              : type == 'lists'
              ? item.type == 1 && item.is_public == 0 && item.trainer_id == null
              : null
          ) {
            exp.push({
              id: item.id,
              name: item.name,
              type: item.status,
              words: item.words.length,
              words_content: item.words,
              state: item.words
                .map(w => w.state)
                .includes((1 && 2) || (0 && 1) || (0 && 2) || 1)
                ? 'incomplete'
                : item.words.map(w => w.state).includes(2)
                ? 'complete'
                : 'new',
            });
          }
        });
        resolve({vocab, gram, exp});
      })
      .catch(err => reject(err));
  });
};

//-----------------------//
//for phrases , use trim().split("")
// Practice Modes :

//Passive learning
// Get Lists : get specific language :speak first word: Set delay : speak second word : delay  if complete index go back to 0 till time is over :

{/*
if (index >= ttsContent.length) return;
setTopWord(ttsContent[index]);
setBottomWord('-'.repeat(SttContent[index].length));
try {
  await Tts.setDefaultLanguage(lang ==0? 'fr-FR' : lang ==1? 'en-US' : lang ==2? index % 2 == 0 ? 'en-US' : 'fr-FR' : null); // Set French for first item
  Tts.speak(ttsContent[index]);

  await new Promise(resolve => setTimeout(resolve, 1000)); // Delay

  await Tts.setDefaultLanguage(lang ==0? 'en-US' : lang ==1? 'fr-FR' : lang ==2? index % 2 == 0 ? 'fr-FR' : 'en-US' : null); // Set English for second item
  setBottomWord(SttContent[index]);
  Tts.speak(SttContent[index]);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Delay
} catch (error) {
  console.error('TTS Error:', error);
  setTtsStatus('error');
}
PassiveLearning(index + 1); // Recursively speak next content
};
*/}

// Pronunciation
// get lists , show list of words , speak selected word , await response , set result , show option menu

{/*
if (status=='ready') {
    if (ttsStatus == 'init') {
      setProBottom('-'.repeat(proTop.length));
      Tts.setDefaultLanguage(lang == 0 ? 'fr-FR' : 'en-US');
      Tts.setDefaultRate(SpeechSpeed);
      Tts.speak(proTop);
      setStatus('speaking');
      setTimeout(() => {
        Tts.stop();
        startRecording(lang == 0 ? 'fr-FR' : 'en-US');
      }, 1000);
      setStatus('recording');
      console.log('recording');
    } 
  }
     if (status=='recording'){
      if (input != '') {
        setProBottom(input);
        stopRecording();
        if (input == proTop) {
          console.log('success');
          setStatus('finished');
        }
        if (input != proTop) {
          console.log('wrong');
          setStatus('finished');
        }}

*/}
