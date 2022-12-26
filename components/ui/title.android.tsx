import { FC, ReactNode } from "react";
import { StyleSheet, Text, Platform } from "react-native";

interface IProps {
  children?: string | ReactNode | ReactNode[];
}

const Title: FC<IProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "ios" ? 2 : 1,
    // borderWidth: Platform.select({ ios: 2, android: 1 }),
    borderWidth: 1,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
