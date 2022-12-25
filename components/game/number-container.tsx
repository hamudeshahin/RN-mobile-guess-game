import { FC, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/colors";

interface IProps {
  children: string | ReactNode | ReactNode[];
}
const NumberContainer: FC<IProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.yellow700,
    padding: 24,
    marginVertical: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "open-sans-bold",
    color: Colors.yellow700,
    fontSize: 36,
  },
});

export default NumberContainer;
