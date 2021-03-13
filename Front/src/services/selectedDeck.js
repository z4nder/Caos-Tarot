
import {Alert} from 'react-native';
import { AsyncStorage } from "react-native";

export const storeSelectedDeck = async (data) => {
    try {
        await AsyncStorage.setItem('@selectedDeck', JSON.stringify(data));
        Alert.alert("Baralho salvo com sucesso");
      } catch (e) {
        Alert.alert('Erro ao salver o baralho', e.message);
      }
};

export const getSelectedDeck = async () => {
  const sectedDeck = await AsyncStorage.getItem('@selectedDeck');
  return JSON.parse(sectedDeck);
};