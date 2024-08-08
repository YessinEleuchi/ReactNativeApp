import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Green, Tomato, White, Yellow} from '../Color';
import Progress from './ProgressCircle';
import {Icon} from '@rneui/base';
import ProgressPassive from './ProgressCirclePassive';

const fr = require('../assets/icons/ic_fr.png');

const gb = require('../assets/icons/ic_gb.png');

export default function LearnContent(props) {
  return (
    <View style={styles.main}>
      {props.type == 'pronunciation' || props.type == 'sim' ? (
        <>
          <Text style={styles.text}>{props.top}</Text>
          <Image source={props.lang === 0 ? fr : gb} style={styles.icon} />
          <View
            style={{
              backgroundColor:
                props.status == 'correct'
                  ? Green
                  : props.status == 'incorrect'
                  ? Tomato
                  : null,
            }}>
            {props.status == 'correct' || props.status == 'incorrect' ? (
              <>
                <TouchableOpacity style={styles.button}>
                  <Icon type="ionicon" name="volume-medium" color={White} />
                  <Text style={styles.text2}>Listen</Text>
                </TouchableOpacity>
                {props.status == 'correct' ? (
                  <Icon
                    type="ionicon"
                    name="checkmark"
                    color={White}
                    size={45}
                  />
                ) : props.status == 'incorrect' ? (
                  <Icon type="ionicon" name="close" color={White} size={45} />
                ) : null}
                <TouchableOpacity style={styles.button}>
                  <Icon type="ionicon" name="mic" color={White} />
                  <Text style={styles.text2}>again</Text>
                </TouchableOpacity>
              </>
            ) : (
              <Progress state={props.status} progress={props.progress} action={props.action} navigation={props.navigation}

              />
            )}
          </View>
          <Image source={props.lang === 0 ? fr : gb} style={styles.icon} />
          <Text style={styles.text}>{props.bottom}</Text>
        </>
      ) : (
        <>
          <Text style={styles.text}>{props.top}</Text>
          <Image source={props.lang === 0 ? fr : gb} style={styles.icon} />
          <View>
            <Text style={styles.text}>{props.middle}</Text>
            <ProgressPassive state={props.status} progress={props.progress} action={props.action} navigation={props.navigation} />
          </View>
          <Image source={props.lang === 0 ? gb : fr} style={styles.icon} />
          <Text style={styles.text}>{props.bottom}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 72 / 2,
    width: 108 / 2,
  },
  text2: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
  },
  main: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    width: '100%',
  },
  button: {
    margin: 5,
  },
  progress: {
    backgroundColor: Yellow,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
