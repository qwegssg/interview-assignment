const database = {
  mongo: {
    url: process.env.MONGO_DB_URI || 'mongodb://user:user@ds255308.mlab.com:55308/beaconcrystal'
  }
};

module.exports = database;
