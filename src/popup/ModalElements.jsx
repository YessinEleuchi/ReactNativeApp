import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BackgroundImage} from '@rneui/base';
import TopHeader from '../component/TopHeader';
import {Black, Cream, DarkGray, DarkGreen, Gray, Green, Tomato, White} from '../Color';
import {Input, Icon} from '@rneui/themed';
import BottomButton from '../component/BottomButton';
import {useTranslation} from 'react-i18next';
import CreateHead from '../component/CreateHead';
import {createList} from '../api/user_api';


const bg = require('../assets/bg/bglight.png');
const fr = require('../assets/icons/ic_fr.png');
const eng = require('../assets/icons/ic_gb.png');

const MyModal = props => {

  const {t} = useTranslation();
  const [french, setFrench] = useState('');
  const [english, setEnglish] = useState('');
  const setWords = props.setWords;
  const addword = () => {
    if (french.length > 0 && english.length > 0) {
      setWords([...props.words, {french: french, english: english}]);
      setFrench('');
      setEnglish('');
    }
  };

  useEffect(() => {
    console.log(props.words);
  }, [props.words]);
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={props.isVisible}>

        <View style={styles.main}>
        <View style={{height: StatusBar.currentHeight}}></View>
          <SafeAreaView style={{flex: 1}}>
            <BackgroundImage source={bg} style={styles.bg}>
              <TopHeader
                Header={t('add_an_element')}
                headerLeft="arrow-back"
                iconColor={Tomato}
                color={Black}
                align="center"
                bgColor={Cream}
                action={props.toggle}
              />
              <CreateHead title="Test" count={props.words.length} type="gram" />
              <View style={{backgroundColor: Cream}}>
                <Input
                  placeholder="Bonjour Brian !!!"
                  label={t('fra')}
                  value={french}
                  onChangeText={setFrench}
                  labelStyle={{fontSize: 14, fontWeight: '500', color: Black}}
                  leftIcon={<Image source={fr} style={styles.icon} />}
                  inputStyle={styles.input}
                  inputContainerStyle={{borderColor: Cream}}
                  containerStyle={{
                    marginTop: 20,
                  }}
                />
                <Input
                  placeholder="Hello Brian !!!"
                  label={t('eng')}
                  value={english}
                  onChangeText={setEnglish}
                  labelStyle={{fontSize: 14, fontWeight: '500', color: Black}}
                  leftIcon={<Image source={eng} style={styles.icon} />}
                  inputStyle={styles.input}
                  inputContainerStyle={{borderColor: Cream}}
                  containerStyle={{
                    borderColor: Gray,
                    borderBottomWidth: 1,
                  }}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={addword}>
                  <Icon
                    type="ionicon"
                    name="add-circle"
                    size={24}
                    color={Green}
                  />
                  <Text style={styles.text}>{t('add_the_element')}</Text>
                  <Icon
                    type="ionicon"
                    name="chevron-forward"
                    size={20}
                    color={DarkGray}
                  />
                </TouchableOpacity>
              </View>
            </BackgroundImage>
            <BottomButton
              type="create"
              bot={true}
              action={() => props.nav.goBack()}
            />
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Cream,
  },
  bg: {
    height: '100%',
    width: '100%',
  },
  icon: {
    height: 72 / 2.5,
    width: 108 / 2.5,
  },
  btn: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '300',
    color: Black,
    marginLeft: 10,
    marginVertical: 10,
    paddingVertical: 10,
    width: '85%',
  },
  input: {
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: White,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Gray,
    marginHorizontal: 10,
  },
});
