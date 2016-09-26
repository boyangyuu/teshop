var fs = require('fs');
var path = require('path');

var Busboy = require('busboy');
var utility = require('utility');

var uploadConfig = require('./config').upload;

var ueditor = function(static_path){
	return function(req,res,next){
		console.log("---"+req.query.action);
			if(req.query.action === 'listimage'){

	        var list_dir = uploadConfig.url;
	        var str = '';
		    var i = 0;
		    var list = [];
		    var allowFiletypes = uploadConfig.imageAllowFiles;

		    fs.readdir(path.join(static_path + list_dir), function(err, files) {
		        if (err) {
		        	return next(err);
		        }

	            var total = files.length;

	            files.forEach(function(file) {
	            	var ext = path.extname(file).toLowerCase();
	            	if (ext.length>0 && allowFiletypes.indexOf(ext) >= 0) {
		              	var temp = {};
		              	if (list_dir[ list_dir.length - 1 ] == '/' ) {
		                	temp.url = list_dir + file;
		              	} else {
		                	temp.url = list_dir + "/" + file;
			            }

		              	list[i] = temp;
		            }

		            i++;

		            if (i === total) {
		              	res.json({
		                	"state": "SUCCESS",
		                	"list": list,
		                	"start": 1,
		                	"total": total
		              	});
		            }
		        });
		    });
		}
		else if(req.query.action === 'uploadimage'){
			var busboy = new Busboy({
	        	headers: req.headers
	      	});

	      	busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

				var img_url = uploadConfig.url;

				var newFilename = utility.md5(filename + String((new Date()).getTime())) +
				    path.extname(filename);

				var upload_path = uploadConfig.path;
				var base_url    = img_url;
				var filePath    = path.join(upload_path, newFilename);
				var fileUrl     = base_url + newFilename;

				file.on('end', function (err) {
					if(err){
						return next(err);
					}

					res.json({
			          	'url': fileUrl,
			          	'title': req.body.pictitle,
			          	'original': filename,
			          	'state': 'SUCCESS'
			        });
				});

				file.pipe(fs.createWriteStream(filePath));
	      	});
	      	req.pipe(busboy);
		}
		else{
			res.setHeader('Content-Type', 'application/json');
	        return res.redirect('./nodejs/config.json');
		}
	};
};

module.exports = ueditor;
