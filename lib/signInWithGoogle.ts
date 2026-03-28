import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from "@react-native-google-signin/google-signin";

export async function signInWithGoogle() {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    if (isSuccessResponse(response)) {
      console.log(response.data.user.email);
      return { msg: "success", response };
    } else {
      // sign in was cancelled by user
      console.log("user cancelled sign in");
    }
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          console.log("sign in already in progress");
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // Android only, play services not available or outdated
          console.log("play services not available");
          break;
        default:
          // some other error happened
          console.log(error.message);
      }
    } else {
      // an error that's not related to google sign in occurred
      console.log("some other error occured");
    }
  }
}
