import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton, { IOnPress } from "../components/ui/primary-button";
import Title from "../components/ui/title";
import Colors from "../utils/colors";

interface IProps {
  onNewGame: IOnPress;
  roundsNumber: number;
  userNumber: number;
}

const GameOverScreen: FC<IProps> = ({
  onNewGame,
  userNumber,
  roundsNumber,
}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over !</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/imgs/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
      </View>
      <PrimaryButton onPress={onNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

export default GameOverScreen;
