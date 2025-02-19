const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.turn;;
    this.correctGuesses = [];
    this.incorrectGuesses = [];
  }
  
  returnCurrentCard() {
    return this.deck.cards[this.turnCount];
  }

  takeTurn(guess) {
    this.turn = new Turn(guess, this.returnCurrentCard());
    this.turnCount++;

    if (guess === this.turn.card["correctAnswer"]) {
      this.correctGuesses.push(this.turn.card["id"]);
      return `correct!`;
    }
    else if (guess !== this.turn.card["correctAnswer"]) {
      this.incorrectGuesses.push(this.turn.card["id"]);
      return `incorrect.`;
    }
  }

  calculatePercentCorrect() {
    let correctCount = this.correctGuesses.length;
    let incorrectCount = this.incorrectGuesses.length;
    let percentageCorrect = Math.floor((correctCount / (correctCount + incorrectCount)) * 100);
    return percentageCorrect;
  }

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;