var Promise = require('bluebird');
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Vehicle {
    _id: Int,
    plateNumber: String
  }  
  type Driver {
    vehicle: Vehicle
  }
  type Account {
    name: String,
    age: Int,
    _id: Int,
    driverInfo: Driver
  }
  type Query {
    cars: Vehicle,
    drivers: Driver,
    accounts: Account
  }
`);

var root = {
  cars: () => Promise.resolve({ _id: 1, plateNumber: '76C1.27022' }),
  drivers: () => Promise.resolve({ vehicle: { _id: 1, plateNumber: '76C1.27022' } }),
  accounts: () => Promise.resolve({ name: "Chuong Vo", age: 27, _id: 1, driverInfo: { vehicle: { _id: 1, plateNumber: '76C1.27022' } } })
};

var app = express();
app.use('/api/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));