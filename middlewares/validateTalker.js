const fs = require('fs/promises');
const getAllTalkers = require('../helpers/getAllTalkers');

const TALKERS = './talker.json';

const validateTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const talker = await getAllTalkers(TALKERS);
  const newTalker = { id: talker.length + 1, name, age, talk };
  talker.push(newTalker);
  await fs.writeFile(TALKERS, JSON.stringify(talker));
  return res.status(201).json(newTalker);
};

module.exports = validateTalker;
