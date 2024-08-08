import { View, Text } from 'react-native'
import React from 'react'
import {CheckBox} from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { Green } from '../Color';


const Radio = (props) => {
  const {t} = useTranslation();
    return (
      <View>
        <CheckBox
          checked={props.selectedIndex === props.index}
          onPress={props.press}
          containerStyle={{backgroundColor:null}}
          checkedColor={Green}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          textStyle={{fontWeight:'500'}}
          title={props.title=='freng'?t('freng'):props.title=='engfr'?t('engfr'):props.title=='both'?t('both'):props.title=='fr'?t('fra'):props.title=='eng'?t('eng'):null}
        />
      </View>
    );
  }

export default Radio