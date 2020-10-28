var url   = require('url');
var adr   = 'http://localhost:8080/default.htm?year=2017&month=february';
var query = url.parse(adr, true);

console.log(query.host);
console.log(query.pathname);
console.log(query.search);

var qdata = query.query;

console.log(qdata.month);

