import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import {  DarkGreen , Cream } from '../Color';
import { useSelector,useDispatch } from 'react-redux';
import { setWeek, setLearn } from '../state/progressTop';
import { useTranslation } from 'react-i18next';


const ProgressMenu = () => {
const { t } = useTranslation();
const {value} = useSelector(state => state.progress)
const dispatch = useDispatch();
  return (
    <View style={styles.main}>
    <View style={styles.headerMenu}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => dispatch(setWeek())}
        style={[
          styles.notSelected,
          value == 'week' ? styles.Seleceted : null,
        ]}
      >
      <Text style={styles.textMenu}>{t('myweek')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => dispatch(setLearn())}
        style={[
          styles.notSelected,
          value == 'learn' ? styles.Seleceted : null,
        ]}
      >
      <Text style={styles.textMenu}>{t('mylearning')}</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}
const styles =StyleSheet.create({
    notSelected:{
        padding:8,
        width:'50%',
    },
    Seleceted:{
        backgroundColor:DarkGreen,
        borderRadius:8,
        

    },
    headerMenu:{
        flexDirection:'row',
        backgroundColor:'#C2C3B8',
        borderRadius:8,
        width:'90%',
        justifyContent:'space-evenly',
        alignSelf:'center',
        marginVertical:10
    },
    textMenu:{
        color:'white',
        textAlign:'center',
        fontWeight:'500',
    },
    main:{
      backgroundColor:Cream
    }
})

export default ProgressMenu 