const { sendMessage } = require('../handles/sendMessage');

module.exports = {
  name: 'solve',
  description: 'Solve a puzzle for the current era',
  usage: 'solve [answer]',
  async execute(senderId, args, pageAccessToken, playerState) {
    const answer = args.join(' ').toLowerCase();
    const era = playerState[senderId]?.era;

    switch (era) {
      case 'ancient_egypt':
        if (answer === 'the nile') {
          playerState[senderId].artifacts.push('Scarab Amulet Fragment');
          sendMessage(senderId, { text: "Correct! You've obtained the Scarab Amulet Fragment. Type 'era medieval_europe' to continue." }, pageAccessToken);
        } else {
          sendMessage(senderId, { text: "Incorrect answer. Try again or type 'hint' for help." }, pageAccessToken);
        }
        break;
      case 'medieval_europe':
        if (answer === 'this is secret love') {
          playerState[senderId].artifacts.push('Compass Dial');
          sendMessage(senderId, { text: "Correct! You've obtained the Compass Dial. Use 'era feudal_japan' to continue." }, pageAccessToken);
        } else {
          sendMessage(senderId, { text: "Incorrect answer. Try again or type 'hint' for help." }, pageAccessToken);
        }
        break;
      // Add additional cases for other eras
      default:
        sendMessage(senderId, { text: "You need to start an era first. Try 'era ancient_egypt'." }, pageAccessToken);
    }
  }
};
