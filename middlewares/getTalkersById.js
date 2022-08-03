const getAllTalkers = require('../helpers/getAllTalkers');

const TALKERS = './talker.json';

const getTalkersById = async (req, res) => {
  const { id } = req.params;
  const talkers = await getAllTalkers(TALKERS);
  const talker = talkers.find((talkerid) => talkerid.id === Number(id));
  if (!talker) {
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }
  return res.status(200).json(talker);
};

module.exports = getTalkersById;
