import { FC, useCallback, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Card from "../components/ui/card";
import CardTitle from "../components/ui/card-title";
import PrimaryButton from "../components/ui/primary-button";
import Title from "../components/ui/title";
import Colors from "../utils/colors";

interface IProps {
  onPcikedNumber: (number: number) => void;
}

const StartGameScreen: FC<IProps> = ({ onPcikedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const { width, height } = useWindowDimensions();

  // update entered number
  const numberEnteredHandler = useCallback((input: string) => {
    setEnteredNumber(input);
  }, []);

  // confirm number
  const confirmEnteredNumberHandler = useCallback(() => {
    const chosenNumber: number = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Input",
        "Please check number, has to be between 1 and 99",
        [
          {
            text: "Ok",
            style: "destructive",
            onPress: () => setEnteredNumber(""),
          },
        ]
      );
      // show alert
      return;
    }
    // valid number
    onPcikedNumber(chosenNumber);
  }, [enteredNumber]);
  // reset number
  const resetEnteredNumberHandler = useCallback(() => {
    setEnteredNumber("");
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View
          style={[{ marginTop: height < 400 ? 30 : 100 }, styles.rootContainer]}
        >
          <Title>Guess My Number</Title>
          <Card>
            <CardTitle>Enter a number</CardTitle>
            <TextInput
              value={enteredNumber}
              style={styles.input}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              onChangeText={numberEnteredHandler}
              autoCorrect={false}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetEnteredNumberHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmEnteredNumberHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
          {/* BUTTONS */}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 420 ? 30 : 100,
    alignItems: "center",
  },

  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.yellow700,
    borderBottomWidth: 2,
    color: Colors.yellow700,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
