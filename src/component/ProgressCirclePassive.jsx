import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Icon} from '@rneui/themed';
import {
  CircularProgressBase,
  ProgressRef,
} from 'react-native-circular-progress-indicator';
import {Green, White, Yellow} from '../Color';
import {useTranslation} from 'react-i18next';


export default function ProgressPassive(props) {
  const [value, setValue] = useState(0);
  const {t} = useTranslation();
  const butpress = () => {
    setValue(360);
    props.action();
  }
  return (
    <View>
      <CircularProgressBase
        value={props.progress == 0 ? 0 : props.progress}
        radius={50}
        duration={500}
        activeStrokeColor={Yellow}
        maxValue={360}
        rotation={90}
        showProgressValue={false}>
        
        <TouchableOpacity onPress={()=>butpress()} activeOpacity={0.8}>
          <Icon
            type="ionicon"
            name={props.state == 'listening' ? 'volume-medium' : 'mic'}
            size={26}
            color={White}
          />
          <Text style={styles.main}>
            {props.state == 'hearing'
              ? t('hearing')
              : props.state == 'listening'
              ? t('listening')
              : null}
          </Text>
        </TouchableOpacity>
      </CircularProgressBase>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  },
});
