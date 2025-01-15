import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const AppDimension = {
  boxWidth: width * 1,
  height: height,
  height50: height * 0.5,
};

const AppFont = {
  fontSize25: 25,
  fontSize20: 20,
  fontSize15: 15,
  fontSize10: 10,
};

const AppColor = {
    fontColorCrimson : 'crimson',
    fontColorBlue:'#1e90ff',
    fontColorWhite:'#fff',
    fontColorBlack:'#000'
}

const AppMargin = {
    margint10:10,
    margin20:20,
    margin:30,
    margin50:50
}

const AppPadding = {
    padding10:10,
    padding20:20,
}

const AppPaddinLeftRight = {
    paddinleftRight : 20
}

const AppBgColor = {
    bgCrimson : 'crimson',
    bgBlue:'#1e90ff',
    bgWhite:'#fff',
    bgRed:'red',
    bgBlack:'#000'
}

const TouchableOpacityStyle = {
    width: 200,
    marginRight: 0,
    backgroundColor: '#1e90ff',
    marginTop: 20,
    padding: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
}

const AppConstants = {
  AppDimension,
  AppFont,
  AppColor,
  AppMargin,
  AppPaddinLeftRight,
  AppPadding,
  AppBgColor,
  TouchableOpacityStyle
};

export default AppConstants;


