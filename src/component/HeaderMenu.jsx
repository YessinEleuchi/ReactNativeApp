import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import {  DarkGreen , Cream } from '../Color';
import { useSelector,useDispatch } from 'react-redux';
import { setExp, setGram, setVocab } from '../state/menuTop';
import { useTranslation } from 'react-i18next';


const HeaderMenu = () => {
const { t } = useTranslation();
const {value} = useSelector(state => state.menu)
const dispatch = useDispatch();
  return (
    <View style={styles.main}>
    <View style={styles.headerMenu}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => dispatch(setVocab())}
        style={[
          styles.notSelected,
          value == 'vocab' ? styles.Seleceted : null,
        ]}
      >
      <Text style={styles.textMenu}>{t('vocab')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => dispatch(setGram())}
        style={[
          styles.notSelected,
          value == 'gram' ? styles.Seleceted : null,
        ]}
      >
      <Text style={styles.textMenu}>{t('grammar')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => dispatch(setExp())}
        style={[
          styles.notSelected,
          value == 'exp' ? styles.Seleceted : null,
        ]}
      >
      <Text style={styles.textMenu}>{t('expression')}</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}
const styles =StyleSheet.create({
    notSelected:{
        padding:8,
        width:'33%',
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

export default HeaderMenu 