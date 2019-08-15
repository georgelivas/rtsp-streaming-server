//Camera Authentication
var ip_address = "10.10.240.36"
//camera username and password
var username = "admin";
var password="admin";

//A channel of camera stream
Stream = require('node-rtsp-stream');
stream = new Stream({
    streamUrl: 'rtsp://' + username + ':' + password + '@' + ip_address +':554/11',
    wsPort: 9999
}