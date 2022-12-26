import { StatusBar } from "expo-status-bar";
import { FC, useCallback, useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/start-game-screen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/game-screen";
import Colors from "./utils/colors";
import GameOverScreen from "./screens/game-over-screen";

const App: FC = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const [roundsNumber, setRoundsNumber] = useState<number>(0);

  const [fontsLoaded] = useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  // start game
  const startGameHandler = useCallback((pickedNumber: number) => {
    setUserNumber(pickedNumber);
    // game is started
    setGameIsOver(false);
  }, []);

  // game over
  const gameOverHandler = useCallback((roundSum: number) => {
    setGameIsOver(true);
    setRoundsNumber(roundSum);
  }, []);

  const restartGame = useCallback(() => {
    setGameIsOver(true);
    setUserNumber(null);
    setRoundsNumber(0);
  }, []);

  let screen = <StartGameScreen onPcikedNumber={startGameHandler} />;

  if (!fontsLoaded) return <AppLoading />;

  if (userNumber) {
    screen = (
      <GameScreen gameOverHandler={gameOverHandler} chosenNumber={userNumber} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        onNewGame={restartGame}
        userNumber={userNumber}
        roundsNumber={roundsNumber}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.yellow700]}
      style={styles.rootScreen}
    >
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/imgs/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

export default App;
