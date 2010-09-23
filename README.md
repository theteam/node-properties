# Node Properties

Node properties allows you to externalise configuration in a consistent manner using JSON files in a known location.  

## Usage

From the root of your application (where the executing directory will be) create a folder called properties and a file within this called 'build.json'.  Then in your application require this module and access your properties directly. An example is reading the port to start your application on:

  var props = require('properties');
  console.log(props.port); 

# Future Scope

I'd like to be able to get the current executing username and read a file called username.json and override any properties from the build file to allow simple local customisation.
