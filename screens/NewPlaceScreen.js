import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';

const NewPlaceScreen = (props) => {
  return (
    <ScrollView>
      <View>
        <Text>Title</Text>
        <TextInput />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Place',
};

const styles = StyleSheet.create({});

export default NewPlaceScreen;
