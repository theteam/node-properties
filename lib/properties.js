var fs = require('fs');

var baseProperties = __dirname + '/properties/build.properties';
var properties = {};

path.exists(baseProperties, function(exists){
	if (exists)
		properties = JSON.parse(fs.readFileSync(baseProperties, 'utf8'));	
});

module.exports = properties;