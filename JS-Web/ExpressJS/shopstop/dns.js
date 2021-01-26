//  const dns = require('dns');
// const http = require('http');

// const options = {
//     family: 6,
//     hints: dns.ADDRCONFIG | dns.V4MAPPED,
//   };
  

// let lookupResult = dns.lookup('http://google.bg', options, (err, address, family) => {
//     console.log(`address: ${address} family: IPv${family}`, address, family);

// });

// console.log(lookupResult);

const dns = require('dns');
const options = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};
dns.lookup('marinov-dev.com', options, (err, address, family) =>
  console.log('address: %j family: IPv%s', address, family));
 // addresses: [{"address":"::ffff:93.184.216.34","family":6}]
 
// When options.all is true, the result will be an Array.
options.all = true;
dns.lookup('example.com', options, (err, addresses) =>
  console.log('addresses: %j', addresses));
// addresses: [{"address":"2606:2800:220:1:248:1893:25c8:1946","family":6}]