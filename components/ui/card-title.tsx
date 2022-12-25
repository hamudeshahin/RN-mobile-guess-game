import { FC, ReactNode } from "react";
import {
  StyleSheet,
  StyleSheetProperties,
  Text,
  ViewStyle,
} from "react-native";
import Colors from "../../utils/colors";

interface ICardTitle {
  children: string | ReactNode | ReactNode[];
  style?: ViewStyle;
}

const CardTitle: FC<ICardTitle> = ({ children, style }) => {
  return <Text style={[styles.insrtuctionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  insrtuctionText: {
    fontFamily: "open-sans",
    color: Colors.yellow700,
    fontSize: 24,
  },
});

export default CardTitle;
