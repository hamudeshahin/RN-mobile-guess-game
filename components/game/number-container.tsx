import { FC, ReactNode } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
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

const deviceWidth = Dimensions.get("window").width;
// const divceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.yellow700,
    padding: deviceWidth < 390 ? 12 : 24,
    marginVertical: deviceWidth < 390 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    // maxWidth: "90%",
    // width: 300,
  },
  text: {
    fontFamily: "open-sans-bold",
    color: Colors.yellow700,
    fontSize: deviceWidth < 390 ? 16 : 24,
  },
});

export default NumberContainer;
