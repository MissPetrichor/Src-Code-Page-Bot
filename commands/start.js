const { sendMessage } = require('../handles/sendMessage');

module.exports = {
  name: 'start',
  description: 'Initiate the Time Traveler\'s Quest',
  async execute(senderId, args, pageAccessToken, playerState) {
    playerState[senderId] = { era: 'ancient_egypt', artifacts: [] };
    sendMessage(senderId, { text: "Welcome to the Time Traveler's Quest! Type 'era ancient_egypt' to begin." }, pageAccessToken);
  }
};
