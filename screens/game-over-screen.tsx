import { FC } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ScrollView,
} from "react-native";
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
  const { height, width } = useWindowDimensions();

  let imageSize = 300;
  if (width < 380) imageSize = 150;
  if (height < 400) imageSize = 80;

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.rootContainer}>
        <Title>Game Over !</Title>
        <View style={[imageStyle, styles.imageContainer]}>
          <Image
            style={styles.image}
            source={require("../assets/imgs/success.png")}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>
          </Text>
        </View>
        <PrimaryButton onPress={onNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 390 ? 150 : 300,
    // height: deviceWidth < 390 ? 150 : 300,
    // borderRadius: deviceWidth < 390 ? 75 : 150,
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
