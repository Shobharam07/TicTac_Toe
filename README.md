# ❌⭕ Tic Tac Toe

A classic **Tic Tac Toe** game built with vanilla **HTML**, **CSS**, and **JavaScript**. Play against a friend in this two-player game with a beautiful purple-blue gradient UI, smooth animations, and responsive design! 🎮

## 🚀 Live Demo

🔗 [tic-tac-toe-iota-two-87.vercel.app](https://tic-tac-toe-iota-two-87.vercel.app/)

<!-- Add a screenshot of your app here -->
<!-- ![Tic Tac Toe Screenshot](./screenshot.png) -->

## ✨ Features

- **Two-Player Mode** — Player **O** goes first, then alternates with Player **X**.
- **Win Detection** — Automatically checks all 8 winning combinations:
  - 3 Horizontal rows
  - 3 Vertical columns
  - 2 Diagonal lines
- **Draw Detection** — Declares a draw when all 9 cells are filled with no winner.
- **Winner Announcement** — Displays "Winner is O" or "Winner is X" dynamically.
- **Restart Game** — One-click restart button to reset the board and play again.
- **Click Prevention** — Already filled cells cannot be overwritten.
- **Board Lock** — Game board is disabled after a win or draw to prevent further moves.
- **Responsive Design** — Adapts to smaller screens (mobile-friendly with `@media` queries).
- **Smooth Animations** — Hover effects and button press transitions for a polished feel.

## 🎯 How It Works

1. Click any cell on the **3×3 grid** to place your mark.
2. **Player O** always goes first.
3. Players alternate turns placing **O** and **X**.
4. The game checks for a winner after every move.
5. If all 9 cells are filled with no winner → **Draw!**
6. Click **Restart Game** to play again.

## 🏆 Winning Combinations

```
 0 | 1 | 2      Rows:      [0,1,2] [3,4,5] [6,7,8]
-----------      Columns:   [0,3,6] [1,4,7] [2,5,8]
 3 | 4 | 5      Diagonals: [0,4,8] [2,4,6]
-----------
 6 | 7 | 8
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Game board structure with 3×3 grid cells |
| **CSS3** | Gradient background, CSS Grid layout, responsive design, hover animations |
| **JavaScript** | Game logic, turn management, win/draw detection, DOM manipulation |

## 📊 Language Composition

![CSS](https://img.shields.io/badge/CSS-41.9%25-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-40.6%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML-17.5%25-E34F26?style=flat-square&logo=html5&logoColor=white)

## 📂 Project Structure

```
TicTac_Toe/
├── index.html       # Game board with 3×3 grid cells and restart button
├── style.css        # Gradient background, CSS Grid, responsive styles
└── script.js        # Game logic — turn system, win/draw detection, restart
```

## 🧠 Game Logic Breakdown

| Feature | Implementation |
|---------|---------------|
| Board State | Array of 9 elements (`"E"` = empty, `"O"` or `"X"` = filled) |
| Turn Tracking | Toggle between `"O"` and `"X"` after each valid move |
| Win Check | Iterates through 8 winning combos, compares array values |
| Draw Check | If `total_turn == 9` and no winner → Draw |
| Board Lock | `removeEventListener` stops clicks after game ends |
| Restart | Resets array, turn counter, DOM content, and re-attaches click listener |

## 🏁 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shobharam07/TicTac_Toe.git
   ```
2. **Navigate to the project folder**
   ```bash
   cd TicTac_Toe
   ```
3. **Open in browser**
   ```bash
   open index.html
   ```
   Or simply open `index.html` in your preferred browser.

## 🙌 Contributing

Contributions, issues, and feature requests are welcome! Ideas for improvement:
- 🤖 Add a single-player mode (vs AI)
- 🎨 Add X/O color differentiation
- 🔊 Add sound effects
- 📊 Add a scoreboard

## 📄 License

This project is open source and available for personal and educational use.

---

⭐ **If you enjoyed playing, give it a star!**
