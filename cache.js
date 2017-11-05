var NodeCache = require( "node-cache" );
var myCache = new NodeCache( { stdTTL: 100, checkperiod: 120 } );

obj = { my: "Special", variable: 42 };
var success = myCache.set( "myKey", obj);
 console.log("success ", success);

var data = myCache.get( "myKey");
 console.log("data ", data);