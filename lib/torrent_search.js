var http = require('http');

var options = {
	host: 'torrentproject.se',
	port: 80,
	path: '/?s=ubuntu+dvd&out=json'
};

exports.search = function() {
	console.log('Searching...')
	http.get(options, function(resp) {
		resp.on('data', function(chunk) {
			console.log('got some data')
		});
	}).on("error", function(e) {
		console.log("Got error: " + e.message);
	});
}