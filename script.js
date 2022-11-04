"use: strict";

const getComputerChoice = function () {
  const choices = ["Rock", "Paper", "Scissor"];

  return choices[Math.floor(Math.random() * choices.length)];
};
