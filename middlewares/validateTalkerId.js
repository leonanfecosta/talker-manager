const fs = require('fs/promises');
const getAllTalkers = require('../helpers/getAllTalkers');

const TALKERS = './talker.json';

const validateTalkerId = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talker = await getAllTalkers(TALKERS);
  const editedTalker = { id: Number(id), name, age, talk };
  talker[Number(id) - 1] = editedTalker;
  await fs.writeFile(TALKERS, JSON.stringify(talker));
  return res.status(200).json(editedTalker);
};

module.exports = validateTalkerId;
