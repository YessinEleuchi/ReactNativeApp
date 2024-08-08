import React, {useRef} from 'react';
import {View, Button, Text,StyleSheet, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Icon } from '@rneui/themed';
import { Black, Cream, DarkGray, Gray, Green } from '../Color';
import { useTranslation } from 'react-i18next';

export default function BottomSheet(props) {
  const { t } = useTranslation();
  return (
    <View >
      <RBSheet
        ref={props.refs}
        customModalProps={{
          animationType: 'fade',
          statusBarTranslucent: true,
        }}
        height={250}
        
        closeOnDragDown
        closeOnPressMask
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.3)',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: Cream,
          }
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
          <>
          <View style={styles.main}>
            <View style={styles.header}>
              <Text style={styles.title}>{props.title}</Text>
              <Icon type='ionicon' name='close' size={26} onPress={() => props.refs.current.close()}/>
            </View>
            <Text style={styles.subtitle}>
                {
              props.type=='vocab'?t('vocab'):
              props.type=='gram'?t('grammar'):
              props.type=='exp'?t('expression'):
              null
              }
          </Text>
          </View>
          <TouchableOpacity onPress={() => console.log('share')}>
          <View style={styles.item}>
            <Text style={styles.text}>{t('share')}</Text>
            <Icon type='ionicon' name='share' size={26}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('delete')}>
          <View style={styles.item}>
            <Text style={styles.text}>{props.parent=='CatalogNav'?t('report'):t('delete')}</Text>
            <Icon type='ionicon' name={props.parent=='CatalogNav'?'warning':'trash'} size={26}/>
          </View>
          </TouchableOpacity>
          </>
      </RBSheet>
    </View>
  );
}
const styles = StyleSheet.create({
    main:{
    paddingVertical:10,
    paddingHorizontal:20,
    borderBottomColor:Gray,
    borderBottomWidth:1
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:5,
  },
  item:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:15,
    paddingHorizontal:20,
    borderBottomColor:Gray,
    borderBottomWidth:1,
  },
  title:{
    fontSize:18,
    fontWeight:'600',
    color:Black

  },
  subtitle:{
    fontSize:12,
    fontWeight:'300',
    color:DarkGray
},
  text:{
    fontSize:16,
    fontWeight:'400',
    color:Black

  }
})