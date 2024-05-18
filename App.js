import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient'
import { useCallback, useEffect, useState } from 'react';
import { GameScreen } from './screens/GameScreen';
import { Colors } from './constants/Colors';
import { GameOverScreen } from './screens/GameOverScreen';
import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [pickedNumber, setPickedNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [roundsNumber, setRoundsNumber] = useState(0);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadAsync({
          'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const onRestartGame = () => {

    setPickedNumber(null);
    setIsGameOver(false);
    setRoundsNumber(0);

  }
  const onConfirmNumber = (number) => {
    setPickedNumber(number);
  }

  const gameOverHandler = (roundsNumber) => {
    setIsGameOver(true);
    setRoundsNumber(roundsNumber);
  }
  let renderedScreen = <StartGameScreen onConfirmNumber={onConfirmNumber} />

  if (pickedNumber) {
    renderedScreen = <GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler} />
  }

  if (isGameOver) {
    renderedScreen = <GameOverScreen userNumber={pickedNumber} roundsNumber={roundsNumber} onRestartGame={onRestartGame} />;
  }
  return (
    <LinearGradient onLayout={onLayoutRootView} style={styles.rootScreen} colors={[Colors.primary700, Colors.accent500]}>
      <ImageBackground style={styles.rootScreen} imageStyle={{ opacity: 0.2 }} source={require('./assets/images/background.png')}>

        <SafeAreaView style={styles.rootScreen}>
          {renderedScreen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
