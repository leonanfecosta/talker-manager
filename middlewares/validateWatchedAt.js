const validateWatchedAt = (req, res, next) => {
  try {
    const { talk: { watchedAt } } = req.body;
    const re = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!watchedAt) {
      return res.status(400).json({
        message: 'O campo "watchedAt" é obrigatório',
      });
    }
    if (!re.test(watchedAt)) {
      return res.status(400).json({
        message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
      });
    }
    return next();
  } catch (error) {
    return next();
  }
};

module.exports = validateWatchedAt;