const getAllTalkers = require('../helpers/getAllTalkers');

const TALKERS = './talker.json';

const getTalkers = async (_req, res) => {
    const talkers = await getAllTalkers(TALKERS);

    if (!talkers) {
      return res.status(200).json([]);
    }

    return res.status(200).json(talkers);
};

module.exports = getTalkers;
