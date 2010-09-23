# Node Properties

Node properties allows you to externalise configuration in a consistent manner using JSON files in a known location.  

## Usage

From the root of your application (where the executing directory will be) create a folder called properties and a file within this called 'build.json'.  Then in your application require this module and access your properties directly. An example is reading the port to start your application on:

<pre>
  var props = require('properties');
  console.log(props.port); 
</pre>

You can override properties by supplying a JSON file with the same name as the user who is executing the process, e.g. properties/robbieclutton.json.  Any properties included here will overwrite those in the build.json file enabling local customisations.
