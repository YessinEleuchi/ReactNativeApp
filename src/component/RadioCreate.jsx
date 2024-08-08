import { View, Text } from 'react-native'
import React from 'react'
import {CheckBox} from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { Gray, Green } from '../Color';


const RadioCreate = (props) => {
  const {t} = useTranslation();
    return (
      <View style={{borderBottomColor:Gray,borderBottomWidth:1}}>
        <CheckBox
          checked={props.selectedIndex === props.index}
          onPress={props.press}
          containerStyle={{backgroundColor:null}}
          checkedColor={Green}
          checkedIcon="checkmark-circle"
          uncheckedIcon="ellipse"
          iconType='ionicon'
          textStyle={{fontWeight:'400'}}
          title={props.title=='vocab'?t('vocab'):props.title=='gram'?t('grammar'):props.title=='exp'?t('expression'):null}
        />
      </View>
    );
  }

export default RadioCreate