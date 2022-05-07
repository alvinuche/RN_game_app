import React, {ReactNode, FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PrimaryButton: FC<{children: ReactNode}> = ({children}) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default PrimaryButton;
