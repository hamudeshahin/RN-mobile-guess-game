import { FC, useCallback, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import NumberContainer from "../components/game/number-container";
import Card from "../components/ui/card";
import CardTitle from "../components/ui/card-title";
import PrimaryButton from "../components/ui/primary-button";
import Title from "../components/ui/title";
import GuessLogItem from "../components/game/log-item";

interface IProps {
  chosenNumber: number;
  gameOverHandler: Function;
}

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1,
  maxBoundary = 100;

const GameScreen: FC<IProps> = ({ chosenNumber, gameOverHandler }) => {
  const initialGuess = generateRandomBetween(1, 100, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

  const { width, height } = useWindowDimensions();

  const nextGuessHandler = useCallback(
    (direction: "lower" | "greater") => {
      if (
        (direction === "lower" && currentGuess < chosenNumber) ||
        (direction === "greater" && currentGuess > chosenNumber)
      ) {
        // is a lie
        Alert.alert("Don't lie!", "You know that is wrong ...", [
          { text: "Sorry!", style: "cancel" },
        ]);
        return;
      }

      if (direction === "lower") {
        maxBoundary = currentGuess;
      } else {
        // greater
        minBoundary = currentGuess + 1;
      }
      const newRndNumber = generateRandomBetween(
        minBoundary,
        maxBoundary,
        currentGuess
      );
      setCurrentGuess(newRndNumber);
      setGuessRounds((prev) => [newRndNumber, ...prev]);
    },
    [currentGuess, chosenNumber]
  );

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      gameOverHandler(guessRounds.length);
    }
  }, [currentGuess, gameOverHandler, chosenNumber]);

  useEffect(() => {
    maxBoundary = 100;
    minBoundary = 1;
  }, []);

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <CardTitle style={{ marginBottom: 20 }}>Higher or Lower ?</CardTitle>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 600) {
    content = (
      <>
        <CardTitle style={{ marginBottom: 20 }}>Higher or Lower ?</CardTitle>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem guess={item} roundNumber={index + 1} />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 32,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
