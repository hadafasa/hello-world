class Game {
    constructor(title, genre, platform) {
      this.title = title;
      this.genre = genre;
      this.platform = platform;
      this.isStarted = false;
    }
  
    start() {
      if (this.isStarted) {
        console.log("The game is already started.");
      } else {
        this.isStarted = true;
        console.log(`Starting the game: ${this.title}`);
      }
    }
  
    pause() {
      if (this.isStarted) {
        console.log(`Pausing the game: ${this.title}`);
      } else {
        console.log("The game is not started yet.");
      }
    }
  
    stop() {
      if (this.isStarted) {
        this.isStarted = false;
        console.log(`Stopping the game: ${this.title}`);
      } else {
        console.log("The game is not started yet.");
      }
    }
  }

const myGame = new Game("The Legend of Zelda", "Action-Adventure", "Nintendo Switch");
  myGame.start(); // Output: Starting the game: The Legend of Zelda
  myGame.pause(); // Output: Pausing the game: The Legend of Zelda
  myGame.stop(); // Output: Stopping the game: The Legend of Zelda

class SoulsGame extends Game {
    constructor(title, genre, platform, sport) {
      super(title, genre, platform);
      this.sport = sport;
    }
  
    play() {
      if (this.isStarted) {
        console.log(`Playing ${this.sport} in the game: ${this.title}`);
      } else {
        console.log("The game is not started yet.");
      }
    }
  }
  

const mySoulsGame = new SoulsGame("Elden Ring", "Soulsbourne", "PC", "Souls");
mySoulsGame.start(); // Output: Starting the game: Elden Ring
mySoulsGame.play(); // Output: Playing Football in the game: Elden Ring
mySoulsGame.pause(); // Output: Pausing the game: Elden Ring
mySoulsGame.stop(); // Output: Stopping the game: Elden Ring



class newGame extends Game {
    constructor(title, genre, platform, newGamePlus) {
        super(title, genre, platform)
        this.newGamePlus = newGamePlus;
        this.newPlaythrough = true;
    }

    startNewGame() {
        if (this.newPlaythrough) {
            console.log (`Starting a ${this.newGamePlus} in the game ${this.title}`);
        } else {
            console.log ("The new game plus is not started yet");
        }
    }
}

const newGamePLUS = new newGame("Elden Ring", "Soulsborne", "PC", "New Game Plus");
newGamePLUS.startNewGame();