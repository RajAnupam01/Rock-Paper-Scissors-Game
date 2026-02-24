import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const index = () => {
    const router = useRouter();

  return (
    <SafeAreaView style={{flex:1}} >
       <StatusBar style="light" backgroundColor="#000000" />
      <LinearGradient
      style={styles.container}
      colors={['black', 'black', 'blue']}
    >
      <Image source={{ uri: 'https://img.freepik.com/premium-vector/colorful-rock-paper-scissors-hand-sign-vector-fun-game-gesture-icons-black-background_1266186-4282.jpg?semt=ais_user_personalization&w=740&q=80' }} style={styles.img} />

      <View style={styles.actions} >
        <TouchableOpacity style={styles.start} onPress={()=> router.push('/Game')} >
          <Text  style={styles.txt} >START GAME</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rule} onPress={() => alert('Rock beats Scissors\nPaper beats Rock\nScissors beats Paper')} >
          <Text style={styles.txt} >HOW TO PLAY</Text>
        </TouchableOpacity>
      </View>


    </LinearGradient>
    </SafeAreaView>
  )
}

export default index
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  img: {
    width: 300,
    height: 300
  },
  actions: {
    marginTop: 30,
    gap: 20
  },
  start: {
    backgroundColor: '#fcad03',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 18
  },
  rule: {
    backgroundColor: '#229908',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 18
  },
  txt: {
    fontSize: 20,
    color: 'white',
    fontWeight: 900
  }
})
