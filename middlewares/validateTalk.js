const validateTalk = (req, res, next) => {
  try {
    const { talk } = req.body;
    if (!talk) {
      return res.status(400).json({
        message: 'O campo "talk" é obrigatório',
      });
    }
    return next();
  } catch (error) {
    return next();
  }
};

module.exports = validateTalk;
