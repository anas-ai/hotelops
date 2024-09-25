import AsyncStorage from "@react-native-async-storage/async-storage";

// Save an item to AsyncStorage
export const setItem = async (key: string, value: any): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(`Error saving data for key: ${key}`, e);
  }
};

// Retrieve an item from AsyncStorage
export const getItem = async <T,>(key: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? (JSON.parse(jsonValue) as T) : null;
  } catch (e) {
    console.error(`Error retrieving data for key: ${key}`, e);
    return null;
  }
};

// Remove an item from AsyncStorage
export const removeItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(`Error removing data for key: ${key}`, e);
  }
};

// Clear all AsyncStorage items
export const clearStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error("Error clearing AsyncStorage", e);
  }
};

// Check if a key exists in AsyncStorage
export const containsKey = async (key: string): Promise<boolean> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys.includes(key);
  } catch (e) {
    console.error("Error checking keys in AsyncStorage", e);
    return false;
  }
};

// Get all keys from AsyncStorage
export const getAllKeys = async (): Promise<any> => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (e) {
    console.error("Error fetching all keys from AsyncStorage", e);
    return [];
  }
};
