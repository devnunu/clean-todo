const models = require('../common/models');

module.exports = () => {
  const options = {
    force: process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'dev',
  };
  return models.sequelize.sync(options);
};
