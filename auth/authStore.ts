// import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

let accessToken: string | null = null;

export const setTokens = async (
  newAccessToken: string,
  newRefreshToken: string
) => {
  accessToken = newAccessToken;

  if (newRefreshToken) {
    await AsyncStorage.setItem("refreshToken", newRefreshToken);
  }
};

export const getAccessToken = () => accessToken;

export const getRefreshToken = async () => {
  return await AsyncStorage.getItem("refreshToken");
};

export const clearTokens = async () => {
  accessToken = null;
  await AsyncStorage.removeItem("refreshToken");
};
