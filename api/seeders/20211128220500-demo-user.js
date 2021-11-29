'use strict';

const User = require("../models/User");

let USER = [
  {
    id: 1,
    firstName: 'Luis', 
    lastName: 'Brito', 
    password: 'JohnJay', 
    phoneNumber: 1234567890, 
    email: 'luis@johnjaymail.com', 
    streetAddress: '123 Francis Street', 
    city: 'New York', 
    zipCode: '10018', 
    updatedAt: new Date(), 
    createdAt: new Date()
  },
  {
    id: 2, 
    firstName: 'Kessler', 
    lastName: 'Lock', 
    password: 'Queens', 
    phoneNumber: 1234567891, 
    email: 'kessler@queensmail.com', 
    streetAddress: '456  Adams Street', 
    city: 'New York', 
    zipCode: '10019', 
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  {
    id: 3, 
    firstName: 'Daniel', 
    lastName: 'Li', 
    password: 'Baruch', 
    phoneNumber: 1234567892, 
    email: 'daniel@baruchmail.com', 
    streetAddress: '789 Taylor Street', 
    city: 'New York', 
    zipCode: '10020', 
    updatedAt: new Date(),
    createdAt: new Date()
  },
];
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    console.log(JSON.stringify(USER));
     await queryInterface.bulkInsert('Users', USER
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
