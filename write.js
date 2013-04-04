var sp = require("serialport");

var serialPort = new sp.SerialPort(process.argv[2],{baudrate:115200});

serialPort.on("open", function () {
  serialPort.on('data', function(data) {
    console.log('data received: ' + data);
  });  
  serialPort.write(process.argv[3], function(err, results) {
	console.log(process.argv[3]);
    console.log('err ' + err);
    console.log('results ' + results);
  });  
});
