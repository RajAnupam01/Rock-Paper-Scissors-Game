import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

type Pick = 'rock' | 'paper' | 'scissors';

const pick: Pick[] = ['rock', 'paper', 'scissors'];

const pickImage: Record<Pick, string> = {
  rock: 'https://sihoonathan.github.io/rock-paper-scissors/assets/img/rock2.png',
  paper: 'https://sihoonathan.github.io/rock-paper-scissors/assets/img/paper2.png',
  scissors: 'https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/scissors.png'
};

const Game: React.FC = () => {
  const [userPick, setUserPick] = useState<Pick | null>(null);
  const [cpuPick, setCpuPick] = useState<Pick | null>(null);
  const [result, setResult] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const computerTurn = (): Pick => {
    const randomIndex = Math.floor(Math.random() * pick.length);
    return pick[randomIndex];
  };

  const decideWinner = (player: Pick, cpu: Pick): string => {
    if (player === cpu) return 'Draw';

    if (
      (player === 'rock' && cpu === 'scissors') ||
      (player === 'paper' && cpu === 'rock') ||
      (player === 'scissors' && cpu === 'paper')
    ) {
      return 'You won the game.🎉';
    }
    return 'CPU won the game.🤖';
  };

  const handlePick = (playerChoice: Pick) => {
    if (isProcessing) return;

    const cpuChoice = computerTurn();
    const warResult = decideWinner(playerChoice, cpuChoice);

    setIsProcessing(true);
    setUserPick(null);
    setCpuPick(null);
    setResult('');

    setTimeout(() => {
      setUserPick(playerChoice);
      setCpuPick(cpuChoice);
      setResult(warResult);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="blue" />
      <LinearGradient colors={['blue', 'black', 'blue']} style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>PLAYER</Text>
          <Text style={styles.headerText}>CPU</Text>
        </View>

        {/* Avatars */}
        <View style={styles.avatarBox}>
          <Image style={styles.avatar} source={{ uri: 'https://img.freepik.com/premium-vector/logo-kid-gamer_573604-730.jpg?w=360' }} />
          <Image style={styles.avatar} source={{ uri: 'https://avatarfiles.alphacoders.com/344/thumb-1920-344291.png' }} />
        </View>

        {/* Picks */}
        <View style={styles.picksContainer}>
           {userPick && <Image source={{uri:pickImage[userPick]}} style={styles.pickImg} />}
           {cpuPick && <Image source={{uri:pickImage[cpuPick]}} style={styles.pickImg} />}
        </View>

        {/* VS Icon */}
        <View style={styles.vsContainer}>
          <Image
            source={{ uri: 'https://png.pngtree.com/png-clipart/20250305/original/pngtree-fiery-vs-logo-battle-symbol-competition-icon-flame-clipart-png-image_20577207.png' }}
            style={styles.vsImage}
          />
        </View>

        {/* Choose Action */}
        <Text style={styles.chooseText}>Choose Your Action</Text>
        <View style={styles.card}>
          {pick.map((item) => (
            <TouchableOpacity
              key={item}
              disabled={isProcessing}
              style={[styles.btnContainer, { opacity: isProcessing ? 0.5 : 1 }]}
              onPress={() => handlePick(item)}
            >
              <Image source={{ uri: pickImage[item] }} style={styles.btnImage} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Result */}
        <Text style={styles.resultText}>{result}</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    marginTop: 20,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 28,
    color: 'white',
    fontWeight: '900'
  },
  avatarBox: {
    marginTop: 20,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 50
  },
  picksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
    gap: 90
  },
  pickImg: {
    height:50,
    width:50,
  },
  vsContainer: {
    alignItems: 'center'
  },
  vsImage: {
    height: 130,
    width: 130
  },
  chooseText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: 'orange'
  },
  card: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  btnContainer: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnImage: {
    width: 100,
    height: 100
  },
  resultText: {
    color: 'yellow',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 30
  }
});