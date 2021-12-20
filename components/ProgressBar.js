import React from "react";
import { View } from "react-native";
import { SIZES, COLORS } from "../constants";
const ProgressBar = ({ containerStyle, barStyle, barPercentage }) => {
  return (
    <View style={{ ...containerStyle }}>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray,
          ...barStyle,
        }}
      ></View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: barPercentage,
          marginTop: SIZES.base,
          backgroundColor: COLORS.primary,
          ...barStyle,
        }}
      ></View>
    </View>
  );
};

export default ProgressBar;
