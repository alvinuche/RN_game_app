import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../constants/colors';
import PrimaryButton from 'components/PrimaryButton';

const StartGame = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        blurOnSubmit={false}
        maxLength={2}
        autoCorrect={false}
        keyboardType="number-pad"
        underlineColorAndroid="transparent"
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 40,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primary,
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 28,
    borderBottomColor: colors.accent,
    borderBottomWidth: 2,
    color: colors.accent,
    marginVertical: 8,
    fontWeight: 'bold',
  },
});

export default StartGame;
