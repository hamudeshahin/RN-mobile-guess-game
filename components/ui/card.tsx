import { FC, ReactNode } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../utils/colors";

export interface IProps {
  children: string | ReactNode | ReactNode[];
}

const Card: FC<IProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 390 ? 12 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});

export default Card;
