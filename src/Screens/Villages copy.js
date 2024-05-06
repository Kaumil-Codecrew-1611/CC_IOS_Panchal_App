import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from 'react-native';
import api from '../context/api';
import { useTranslation } from 'react-i18next';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import LoadingPage from './LoadingPage';
import NoDataFound from './NoDataFound';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../context/i18n';


const Villages = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [villagesData, setVillagesData] = useState([]);
  const [dataFound, setDataFound] = useState(false);
  const { t } = useTranslation();
  const [language, setLanguage] = useState('');

  useEffect( () => {
    getSelectedLanguage()
    fetchVillagesData();
  }, []);

  const getSelectedLanguage = async () => {
    try {
      const storedLanguage = await AsyncStorage.getItem('selectedLanguage');
      if (storedLanguage) {
        i18n.changeLanguage(storedLanguage).catch((error) => {
          console.error('Error changing language:', error);
        });
        console.log(storedLanguage,"storedLanguage")
        setLanguage(storedLanguage);
      }
    } catch (error) {
      console.error('Error retrieving language:', error);
    }
  };
  const fetchVillagesData = async () => {
    try {
      setIsLoading(true);
      api.get('/location')
        .then((response) => {
          if (response.status === 200) {
            setIsLoading(true);
            const data = response.data;
            setVillagesData(data);
            setIsLoading(false);
          } else {
            setIsLoading(false);
            console.log('location Request failed with status:', response.status);
          }

          if (response.data.length <= 0) {
            setDataFound(true)
          } else {
            console.log("Data Found")
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error, 'Handle error');
        });

    } catch (error) {
      setIsLoading(false);
      console.error('An error occurred in location:', error);
    }
  };
  const renderItem = data => {
    const villageName = language === 'en' ? data.item.villageE : data.item.villageG;
    return (
      <View key={data.index}>
        <View style={styles.box}>
          <Fontisto name="holiday-village" color="#333" size={17} />
          <Text style={styles.boxText}>{villageName}</Text>
        </View>
      </View>
    );
  };

  if (dataFound) {
    return (
      <NoDataFound />
    )
  }


  return (
    <ImageBackground source={require('../assets/bg3.jpg')} style={styles.container}>
      {isLoading ? (
        <LoadingPage />
      ) : villagesData && villagesData.length ? (
        <View style={{ width: '100%' }}>
          <FlatList
            data={villagesData}
            renderItem={renderItem}
            contentContainerStyle={styles.villageList}
          />
        </View>
      ) : (
        <View style={styles.blankcontainer}>
          <Text style={styles.blank}>{t('nosearchdatafound')}</Text>
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: '#dae4f0',
    width: '100%',
  },

  box: {
    backgroundColor: '#fff',
    padding: 8,
    marginVertical: 5,
    borderRadius: 6,
    shadowColor: 'black',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  boxText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    paddingVertical: 7,
  },

  villageList: {
    paddingHorizontal: '4%',
    paddingVertical: 10,
  },

  pincode: {
    fontSize: 14,
    color: '#666',
  },

  blankcontainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },

  blank: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
    width: '90%',
    textTransform: 'capitalize',
  },
});

export default Villages;
