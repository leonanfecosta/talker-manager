const fs = require('fs/promises');

const getAllTalkers = async (file) => {
    const data = await fs.readFile(file, 'utf8');
    const talkers = await JSON.parse(data);
    return talkers;
};

module.exports = getAllTalkers;
