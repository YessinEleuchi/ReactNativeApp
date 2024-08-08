import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BackgroundImage} from '@rneui/base';
import TopHeader from '../../component/TopHeader';
import {Black, Cream, DarkGray, Gray, Green, Tomato, White} from '../../Color';
import {Input, Icon} from '@rneui/themed';
import RadioCreate from '../../component/RadioCreate';
import BottomButton from '../../component/BottomButton';
import {useTranslation} from 'react-i18next';
import CreateElements from './CreateElements';
import MyModal from '../../popup/ModalElements';
import {addWord, createList} from '../../api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const bg = require('../../assets/bg/bglight.png');

const CreateLists = ({navigation}) => {
  const {t} = useTranslation();
  const [selectedIndex, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [listName, setListName] = useState('');
  const [words, setWords] = useState([]);

  const CreateList = async data => {
    try {
      if (listName == '') {
        return alert('Please enter list name');
      } else {
        const token = await AsyncStorage.getItem('token');
        createList({name: listName, type: selectedIndex, token: token}).then(
          result => {
            console.log(result.data);
            words.map(w => {
              addWord({
                eng: w['english'],
                fr: w['french'],
                token: token,
                id: result.data.id,
              }).then(result => {
                console.log(result.data);
                navigation.navigate('Lists');
              });
            });
          },
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleModal = () => setIsVisible(!isVisible);
  return (
    <View style={styles.main}>
      <MyModal
        toggle={toggleModal}
        isVisible={isVisible}
        nav={navigation}
        words={words}
        setWords={setWords}
      />
      <SafeAreaView style={{flex: 1}}>
      <View style={{height: StatusBar.currentHeight}}></View>
        <BackgroundImage source={bg} style={styles.bg}>
          <TopHeader
            Header={t('new_list')}
            headerLeft="close"
            color={Black}
            iconColor={Tomato}
            align="center"
            bgColor={Cream}
            action={() => navigation.goBack()}
          />
          <View style={{backgroundColor: Cream}}>
            <Input
              placeholder={t('create_list')}
              label={t('list_name')}
              value={listName}
              onChangeText={setListName}
              labelStyle={{fontSize: 14, fontWeight: '500', color: Black}}
              inputStyle={styles.input}
              inputContainerStyle={{marginTop: 10, borderColor: Cream}}
              containerStyle={{
                marginTop: 20,
                borderColor: Gray,
                borderBottomWidth: 1,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: Black,
                marginHorizontal: 10,
                marginVertical: 10,
              }}>
              {t('list_type')}
            </Text>
            <View style={{marginHorizontal: 10}}>
              <RadioCreate
                title="vocab"
                selectedIndex={selectedIndex}
                index={0}
                press={() => setIndex(0)}
              />
              <RadioCreate
                title="gram"
                selectedIndex={selectedIndex}
                index={2}
                press={() => setIndex(2)}
              />
              <RadioCreate
                title="exp"
                selectedIndex={selectedIndex}
                index={1}
                press={() => setIndex(1)}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={toggleModal}>
              <Icon type="ionicon" name="add-circle" size={24} color={Green} />
              <Text style={styles.text}>{t('add_element')}</Text>
              <Icon
                type="ionicon"
                name="chevron-forward"
                size={20}
                color={DarkGray}
                action={() => toggleModal}
              />
            </TouchableOpacity>
          </View>
        </BackgroundImage>

        <BottomButton type="create" bot={true} action={CreateList} />
      </SafeAreaView>
    </View>
  );
};

export default CreateLists;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Cream,
  },
  bg: {
    height: '100%',
    width: '100%',
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
  text: {
    fontSize: 14,
    fontWeight: '300',
    color: Black,
    marginLeft: 10,
    marginVertical: 10,
    paddingVertical: 10,
    width: '85%',
  },
  btn: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
