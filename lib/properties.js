var fs = require('fs');

var username = process.ENV['USER'];
var base_properties_file = process.cwd() + '/properties/build.json';
var user_properties_file = process.cwd() + '/properties/' + username + '.json';
var properties = {};
var user_properties = {};

try {
	properties = JSON.parse(fs.readFileSync(base_properties_file, 'utf8'));	
} catch (err){
	console.log(err);
}

try {
	user_properties = JSON.parse(fs.readFileSync(user_properties_file, 'utf8'));	
} catch (err){
	// do nothing and don't override
}

for (attrname in user_properties) { 
	properties[attrname] = user_properties[attrname]; 
}

module.exports = properties;