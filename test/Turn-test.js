const { util } = require('chai');
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe(`Turn`, () => {
  let turn;
  let card;

  it.skip(`should accept a string argument representing a users guess`, () => {
    turn = new Turn('guess');

    expect(turn.guess).to.equal('guess');
  })

  it.skip(`should accept the currently played card as an argument`, () => {
    card = new Card(1, "This is a test question", ["Yes", "No"], "Yes");
    turn = new Turn('Yes', card);

    expect(turn.card).to.equal(card);
  })

  it.skip(`should have a returnGuess() method to return the users guess`, () => {
    card = new Card(1, "This is a test question", ["Yes", "No"], "Yes");
    turn = new Turn('Yes', card);

    expect(turn.returnGuess()).to.equal('Yes');
  })

  it.skip(`should have a returnCard() method to return the passed Card instance`, () => {
    card = new Card(1, "This is a test question", ["Yes", "No"], "Yes");
    turn = new Turn('Yes', card);

    expect(turn.returnCard()).to.equal(card);
  })

  it.skip(`should have an evaluateGuess() method returning a boolean that indicates if the guess was right or wrong`, () => {
    card = new Card(1, "This is a test question", ["Yes", "No"], "Yes");
    turn = new Turn('Yes', card);

    expect(turn.evaluateGuess()).to.equal(true);

    card = new Card(1, "This is a test question", ["Yes", "No"], "Yes");
    turn = new Turn('No', card);

    expect(turn.evaluateGuess()).to.equal(false);
  })

  it.skip(`should have a giveFeedback() method that returns either 'correct!' or 'incorrect!' if the guess is right or wrong`, () => {
    card = new Card(1, "This is a test question", ["Yes", "No"], "Yes");
    turn = new Turn('Yes', card);

    expect(turn.giveFeedback()).to.equal('correct!');

    card = new Card(1, "This is a test question", ["Yes", "No"], "Yes");
    turn = new Turn('No', card);

    expect(turn.giveFeedback()).to.equal('incorrect!');
  })
})