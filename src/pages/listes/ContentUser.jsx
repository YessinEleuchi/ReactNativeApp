import React, {useEffect} from 'react';
import {Icon, ListItem} from '@rneui/themed';
import {
  Beige,
  Cream,
  DarkGray,
  Gray,
  Green,
  Greenish,
  Tomato,
  White,
  Yellow,
} from '../../Color';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

//api : list / list type (verified/semi) / ...

const AddLists = props => {
  
  const {t} = useTranslation();
  const goTo = (route, params) => {
    props.navigation.navigate(route, params);
  };
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => goTo('CreationNav', null)}>
        <ListItem
          bottomDivider
          containerStyle={[{backgroundColor: Cream, paddingVertical: 15}]}>
          <Icon name="add-circle" type="ionicon" color={Green} size={26} />
          <ListItem.Content>
            <ListItem.Title style={{color: Green}}>
              {t('create_list')}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    </>
  );
};

export default AddLists;

const styles = StyleSheet.create({
  state: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  statetext: {
    fontWeight: '600',
  },
});
