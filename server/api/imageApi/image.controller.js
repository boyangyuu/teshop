exports.index = function(req, res) {
  Invoice.find(function (err, invoices) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(invoices);
  });
};