import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      "164537034441-55r2qdapirlu4j771sg6j8ubi1ua0la9.apps.googleusercontent.com",
    iosClientId:
      "164537034441-8rdu7ml7noeg0slg5vtunq78pdjupo0o.apps.googleusercontent.com",
  });
};
