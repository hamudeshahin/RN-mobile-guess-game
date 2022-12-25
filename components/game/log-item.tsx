import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/colors";

interface IPorps {
  roundNumber: number;
  guess: number;
}

const GuessLogItem: FC<IPorps> = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
      <Text style={styles.itemText}>#{roundNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.yellow700,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});

export default GuessLogItem;
