'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            3000,

  // MongoDB connection options
  mongo: {
    // uri:    process.env.OPENSHIFT_MONGODB_DB_URL || // Added app
    uri: "mongodb://admin:admin@ds062889.mlab.com:62889/shopnx-dev"
  },

  seedDB: true
};
