import React, { Component } from "react";

class AlphaButtons extends Component {
  generateButtons() {
    if (this.props.nWrong === this.props.maxWrong) {
      return "You Lose";
    }

    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.props.handleGuess}
        disabled={this.props.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  render() {
    return <div className="Hangman-btns">{this.generateButtons()}</div>;
  }
}

export default AlphaButtons;
