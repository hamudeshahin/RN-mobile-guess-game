import { FC, ReactNode } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  GestureResponderEvent,
  Dimensions,
} from "react-native";
import Colors from "../../utils/colors";

export type IOnPress = (event?: GestureResponderEvent) => void;

export interface IPropsButtons {
  children: string | ReactNode | [ReactNode];
  onPress?: IOnPress;
}

const PrimaryButton: FC<IPropsButtons> = ({
  children,
  onPress = () => false,
}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => {
          if (pressed) return [styles.pressed, styles.buttonInnerContainer];
          else return styles.buttonInnerContainer;
        }}
        onPress={onPress}
        android_ripple={{ color: Colors.primary500 }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#4e0329",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  text: {
    fontFamily: "open-sans",
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
