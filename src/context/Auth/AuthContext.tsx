import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useEffect, ReactNode} from 'react';

type AuthContextType = {
  userToken: string | null;
  isLoading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const login = async (token: string) => {
    setIsLoading(true);
    try {
      await AsyncStorage.setItem('userToken', token);
      setUserToken(token);
    } catch (e) {
      console.error('Error saving token:', e);
    }
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.removeItem('userToken');
      setUserToken(null);
    } catch (e) {
      console.error('Error removing token:', e);
    }
    setIsLoading(false);
  };

  const checkLoginState = async () => {
    setIsLoading(true);
    try {
      const token = await AsyncStorage.getItem('userToken');
      setUserToken(token);
    } catch (e) {
      console.error('Error fetching token:', e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkLoginState();
  }, []);

  return (
    <AuthContext.Provider value={{userToken, isLoading, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
