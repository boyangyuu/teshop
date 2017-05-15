'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  // mongo: { //localhost
  //   uri: 'mongodb://localhost/shopnx-dev'
  // },
  mongo: { //alibaba
    // uri: 'mongodb://101.201.81.214/shopnx-dev' // alibaba
    // uri: 'mongodb://127.0.0.1/shopnx-dev' // localhost
    // uri: 'mongodb://127.0.0.1/shopnx-dev' // localhost
    uri: "mongodb://admin:admin@ds062889.mlab.com:62889/shopnx-dev"
    // uri: 'mongodb://54.218.45.111/shopnx-dev' // amazon
  },

  seedDB: true
};
