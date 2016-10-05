var muilterUtil = require('./multerUtil');

exports.index = function(req, res) {
  var upload=muilterUtil.any();
  // console.log(req);
  // console.log(req.headers);
  upload(req, res, function (err, file) {
    if (err) {
      return console.log(err)
    }
    console.log();
    // console.log(req.body);
    return res.status(200).json(req.files[0].filename);
    // console.log(req);
  })
};
