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
} from '../Color';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

//api : list / list type (verified/semi) / ...

const Content = (props) => {
let liste = [];
  const {value} = useSelector(state => state.menu);
  //HeaderMenu
  {
    value == 'vocab'
      ? (liste = props.vocab)
      : value == 'gram'
      ? (liste = props.gram)
      : value == 'exp'
      ? (liste = props.exp)
      : null;
  }

  useEffect(() => {
    liste.length == 0 ? props.empty(true) : props.empty(false);
  }, [liste]);
  //Navigation
  const goTo = params => {
    props.navigation.navigation.navigate('ListContent', params);
  };
  return (
    <>
      {liste.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() =>
            goTo({
              type: value,
              name: item['name'],
              id: item['id'],
              parent: props.navigation.route.name,
              words: item['words_content'],
            })
          }>
          <ListItem
            containerStyle={[
              {
                backgroundColor: Cream,
                paddingVertical: 15,
                borderBottomColor: Gray,
                borderBottomWidth: 0.5,
              },
            ]}>
            <Icon
              name={item.type == 0 ? 'umbrella-outline' : 'umbrella'}
              type="ionicon"
              color={
                item.type == 2
                  ? Beige
                  : item.type == 1
                  ? Greenish
                  : item.type == 0
                  ? Greenish
                  : null
              }
            />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
            <View
              style={[
                styles.state,
                {
                  backgroundColor:
                    item.state == 'complete'
                      ? Green
                      : item.state == 'incomplete'
                      ? Yellow
                      : item.state == 'new'
                      ? Gray
                      : null,
                },
              ]}>
              <Text
                style={[
                  styles.statetext,
                  {color: item.state == 'new' ? DarkGray : White},
                ]}>
                {item.words}
              </Text>
            </View>
          </ListItem>
        </TouchableOpacity>
      ))}
     </>
  );
};

export default Content;

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
