class Player {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.power = 10;
    }
  
    hit(power) {
      this.health -= power;
    }
  
    useItem(item) {
      this.health += item.health;
      this.power += item.power;
    }
  
    showStatus() {
      console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
  }
  
  class ShootingGame {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
  
    getRandomItem() {
      const randomHealth = Math.random() < 0.5 ? 0 : 10;
      const randomPower = Math.random() < 0.5 ? 0 : 10;
      return { health: randomHealth, power: randomPower };
    }
  
    resetPlayers() {
      this.player1 = new Player(this.player1.name);
      this.player2 = new Player(this.player2.name);
    }
  
    start() {
      this.resetPlayers();
  
      console.log("--- Game Starts ---");
      while (this.player1.health > 0 && this.player2.health > 0) {
        console.log("\n--- Next Turn ---");
  
        // Show player status before shooting
        console.log("Player Status before shooting:");
        this.player1.showStatus();
        this.player2.showStatus();
  
        // Get random item for each player before shooting
        const itemPlayer1 = this.getRandomItem();
        const itemPlayer2 = this.getRandomItem();
  
        this.player1.useItem(itemPlayer1);
        this.player2.useItem(itemPlayer2);
  
        // Show player status after using items
        console.log("Player Status after using items:");
        this.player1.showStatus();
        this.player2.showStatus();
  
        // Player 1 shoots Player 2
        this.player2.hit(this.player1.power);
        console.log(`${this.player1.name} hits ${this.player2.name} with power ${this.player1.power}`);
  
        // Player 2 shoots Player 1
        this.player1.hit(this.player2.power);
        console.log(`${this.player2.name} hits ${this.player1.name} with power ${this.player2.power}`);
      }
  
      // Show the winner
      if (this.player1.health <= 0 && this.player2.health <= 0) {
        console.log("\nIt's a draw!");
      } else if (this.player1.health <= 0) {
        console.log(`\n${this.player2.name} wins!`);
      } else {
        console.log(`\n${this.player1.name} wins!`);
      }
    }
  }
  
  // Contoh penggunaan
  const player1 = new Player("Player 1");
  const player2 = new Player("Player 2");
  
  const game = new ShootingGame(player1, player2);
  game.start();
  