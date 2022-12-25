import { FC, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

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
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});

export default Title;
