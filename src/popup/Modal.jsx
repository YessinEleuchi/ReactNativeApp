import React, { useState } from 'react';
import { Modal, View, Button, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { Black, Cream, DarkGray, DarkGreen } from '../Color';
import { BackgroundImage } from '@rneui/base';
import { useTranslation } from 'react-i18next';


const MyModal = (props) => {
  const navigation=props.navigation
const {t}=useTranslation()
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={props.isVisible}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text} onPress={props.toggle}>{t('resume')}</Text>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text style={styles.text}>{t('quit')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DarkGreen

  },
  box: {
    backgroundColor: Cream,
    width: '70%',
    aspectRatio: 1,
    borderRadius: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: Black
  }
})