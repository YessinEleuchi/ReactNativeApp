import { View, Switch, Text, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Green ,White, Gray, DarkGray, Black } from '../Color';
import { useTranslation } from 'react-i18next';

const SwitchBut = (props) => {
    const toggleSwitch = () => props.action(previousState => !previousState);
    const {t} = useTranslation();
    return (
    <View style={styles.main}>
      {props.title=='Selected'?
      <Text style={styles.text}>{t('selectedwords')}</Text>
      :props.title=='failed'?<Text style={styles.text}>{t('repeatfailed')}</Text>:null}
    <Switch
        trackColor={{false: Gray, true: White}}
        thumbColor={props.value ? Green : White}
        ios_backgroundColor={White}
        onValueChange={toggleSwitch}
        value={props.value}
        borderWidth={1}
        borderColor={Gray}
      />
    </View>
  )
}

export default SwitchBut

const styles=StyleSheet.create({
    main:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5,
        marginHorizontal:18,
        alignItems:'center'
    },
    text:{
      color:Black

    }
})