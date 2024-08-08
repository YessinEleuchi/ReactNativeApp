import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PracticeMode from './PracticeMode';
import SetTimer from './SetTimer';
import SwitchBut from './SwitchBut';
import Radio from './Radio';
import Separtor from './Separtor';
import BottomButton from './BottomButton';

const PracticeContent = props => {
  const [selectedIndex, setIndex] = useState(0);
  const [count, setCount] = useState(15);
  const [favorite, setFavorite] = useState(false);
  const [failed, setFailed] = useState(false);
  const [CurrentList, setCurrentList] = useState([]);
  const List = props.words;
  const LearningList = () => {
    let VarList = [];
    if (favorite && failed) {
      List.map(el => {
        el.is_favorite && el.state == 1 ? VarList.push(el) : null;
      });
    } else if (favorite) {
      List.map(el => {
        el.is_favorite ? VarList.push(el) : null;
      });
      setCurrentList(VarList);
    } else if (failed) {
      List.map(el => {
        el.state == 1 ? VarList.push(el) : null;
      });
      setCurrentList(VarList);
    } else {
      setCurrentList(List);
    }
  };
  useEffect(() => {
    LearningList();
  }, [favorite, failed]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <PracticeMode type={props.type} />
        {props.type == 'pronunciation' || props.type == 'sim' ? null : (
          <SetTimer count={count} setCount={setCount} />
        )}
        <Separtor />
        <SwitchBut title="Selected" value={favorite} action={setFavorite} />
        <SwitchBut title="failed" value={failed} action={setFailed} />
        <Separtor />
        {props.type == 'pronunciation' || props.type == 'sim' ? (
          <>
            <Radio
              selectedIndex={selectedIndex}
              index={0}
              press={() => setIndex(0)}
              title="fr"
            />
            <Radio
              selectedIndex={selectedIndex}
              index={1}
              press={() => setIndex(1)}
              title="eng"
            />
          </>
        ) : (
          <>
            <Radio
              selectedIndex={selectedIndex}
              index={0}
              press={() => setIndex(0)}
              title="freng"
            />
            <Radio
              selectedIndex={selectedIndex}
              index={1}
              press={() => setIndex(1)}
              title="engfr"
            />

            <Radio
              selectedIndex={selectedIndex}
              index={2}
              press={() => setIndex(2)}
              title="both"
            />
          </>
        )}
      </View>
      {props.type == 'pronunciation' || props.type == 'sim' ?  (
        <BottomButton
        type="begin"
        bot={true}
        action={() =>
          props.nav.replace('PracticeScreen', {
            type: props.type,
            title: props.title,
            lang: selectedIndex,
            words: CurrentList,
            listType: props.listType,
          })
        }
      />
      ):
      <BottomButton
        type="begin"
        bot={true}
        action={() =>
          props.nav.replace('PracticeScreen', {
            type: props.type,
            title: props.title,
            lang: selectedIndex,
            time: count,
            words: CurrentList,
            listType: props.listType,
          })
        }
      />}
    </View>
  );
};

export default PracticeContent;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {},
});
