var fs = require('fs');

var baseProperties = process.cwd() + '/properties/build.json';
var properties = {};

try {
	properties = JSON.parse(fs.readFileSync(baseProperties, 'utf8'));	
} catch (err){
	console.log(err);
}

module.exports = properties;