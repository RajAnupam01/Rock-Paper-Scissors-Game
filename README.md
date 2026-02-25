# 🎮 Rock Paper Scissors — React Native Game

A simple and interactive Rock-Paper-Scissors mobile game built using **React Native + Expo + TypeScript**.

The app features a home screen, game screen, CPU opponent, smooth navigation, and a clean gradient UI.

---

## ✨ Features

- 🧠 Player vs CPU gameplay
- 🎨 Image-based choices (rock, paper, scissors)
- ⏳ 3-second suspense delay before result
- 🎯 Winner detection logic
- 📱 Clean UI with gradient background
- 🚦 Buttons disabled during processing
- 🔁 Smooth navigation using Expo Router
- 🌗 Status bar color matching screen theme

---

## 🧱 Tech Stack

- React Native
- Expo
- TypeScript
- Expo Router
- Expo Linear Gradient
- Expo Status Bar
- React Native Safe Area Context

---

## 📁 Project Structure

app/
├── index.tsx # Home screen
├── Game.tsx # Rock Paper Scissors game screen
├── _layout.tsx # Navigation stack


---

## 🧠 Game Logic Overview

1. Player selects rock, paper, or scissors.
2. CPU randomly selects a choice.
3. Result is calculated using game rules.
4. UI updates after a short delay.
5. Buttons remain disabled while processing.

---

## 🎮 Game Rules

- Rock beats Scissors
- Paper beats Rock
- Scissors beats Paper
- Same choice → Draw

---

### 1️⃣ Install dependencies

```
npm install
npx expo start

```

👨‍💻 Author

- Built as a learning project while practicing:
- React Native UI design
- Game state management
- TypeScript in mobile apps
- Navigation architecture
