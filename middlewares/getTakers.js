const getAllTalkers = require('../helpers/getAllTalkers');

const TALKERS = './talker.json';

const getTalkers = async (_req, res, next) => {
  try {
    const talkers = await getAllTalkers(TALKERS);

    if (!talkers) {
      return res.status(200).json([]);
    }
    res.status(200).json(talkers);

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = getTalkers;
