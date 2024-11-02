const { sendMessage } = require('../handles/sendMessage');

module.exports = {
  name: 'era',
  description: 'Enter a specific era in the quest',
  usage: 'era [era name]',
  async execute(senderId, args, pageAccessToken, playerState) {
    const era = args[0];
    playerState[senderId] = playerState[senderId] || { era: null, artifacts: [] };

    switch (era) {
      case 'ancient_egypt':
        playerState[senderId].era = 'ancient_egypt';
        sendMessage(senderId, { text: "You've entered Ancient Egypt. Solve the riddle: 'I rise in the East and set in the West. I give life but am not the sun. Who am I?' Use 'solve [answer]' to answer." }, pageAccessToken);
        break;
      case 'medieval_europe':
        playerState[senderId].era = 'medieval_europe';
        sendMessage(senderId, { text: "Welcome to Medieval Europe! Decode this: 'Vjku ku dtuqykv jqnvg.' Use 'solve [answer]' to decode." }, pageAccessToken);
        break;
      // Add other eras similarly
      default:
        sendMessage(senderId, { text: "Era not recognized. Try 'era ancient_egypt' or 'era medieval_europe'." }, pageAccessToken);
    }
  }
};
