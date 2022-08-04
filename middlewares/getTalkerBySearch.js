const getAllTalkers = require('../helpers/getAllTalkers');

const TALKERS = './talker.json';

const getTalkerBySearch = async (req, res) => {
  const { q } = req.query;
  const talkers = await getAllTalkers(TALKERS);
  if (!q) {
    return res.status(200).json(talkers);
  }
  const searchTalkers = talkers.filter((talker) =>
    talker.name.toLowerCase().includes(q.toLowerCase()));
  return res.status(200).json(searchTalkers);
};

module.exports = getTalkerBySearch;
