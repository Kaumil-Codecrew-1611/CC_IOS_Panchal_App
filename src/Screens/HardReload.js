import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import LoadingPage from './LoadingPage';


const HardReload = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'HomePage' }],
        })
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LoadingPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HardReload;
