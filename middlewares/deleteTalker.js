const fs = require('fs/promises');
const getAllTalkers = require('../helpers/getAllTalkers');

const TALKERS = './talker.json';

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const talkers = await getAllTalkers(TALKERS);
  const filteredTalkers = talkers.filter((talker) => talker.id !== Number(id));
  await fs.writeFile(TALKERS, JSON.stringify(filteredTalkers));
  return res.status(204).end();
};

module.exports = deleteTalker;