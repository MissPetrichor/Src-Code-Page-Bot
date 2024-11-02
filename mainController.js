const startCommand = require('./commands/start');
const eraCommand = require('./commands/era');
const solveCommand = require('./commands/solve');

const playerState = {};

module.exports = {
  async execute(senderId, message, pageAccessToken) {
    const args = message.split(' ');
    const command = args.shift().toLowerCase();

    // Auto-start the game if playerState is not initialized
    if (!playerState[senderId]) {
      playerState[senderId] = { era: 'ancient_egypt', artifacts: [] };
      startCommand.execute(senderId, args, pageAccessToken, playerState);
      return;
    }

    // Handle game commands
    switch (command) {
      case 'era':
        eraCommand.execute(senderId, args, pageAccessToken, playerState);
        break;
      case 'solve':
        solveCommand.execute(senderId, args, pageAccessToken, playerState);
        break;
      default:
        sendMessage(senderId, { text: "Unknown command. Available commands: era, solve" }, pageAccessToken);
    }
  }
};
