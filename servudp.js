 function calculateChecksum (cmd) {
	var checksum = 0;
	for(var i = 0; i < cmd.length; i++) {
		checksum = checksum ^ cmd.charCodeAt(i);
	}
	var hexsum = Number(checksum).toString(16).toUpperCase();
   console.log(hexsum)
	if (hexsum.length < 2) {
		hexsum = ("00" + hexsum).slice(-2);
	}
	return hexsum;
}

function calcularChecksum(cadena) {
   let checksum = 0;
   for (let i = 0; i < cadena.length; i++) {
       checksum ^= cadena.charCodeAt(i);
   }
   return checksum.toString(16).toUpperCase();
}

const dgram  = require('dgram');
const server = dgram.createSocket('udp4');

const PORT = 5000;
const HOST = '0.0.0.0';

server.on('listening', () => {
    const address = server.address();
    console.log(`Servidor UDP escuchando en ${address.address}:${address.port}`);
});

server.on('message', (message, remote) => {
    console.log(`Recibido mensaje: ${message} de ${remote.address}:${remote.port}`);
});

server.bind(PORT, HOST);
