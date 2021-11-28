'use strict';

const BATCH = [
  {objectId: 1, author: "Luis", activeClaimant: "Luis", image: null, description: 'wine bottles', batchLocation: "Time Square", batchLocationNotes: "Find Woody", isSorted: true, isClaimed: true, createdAt: new Date(), updatedAt: new Date(),
  },
  {objectId: 2, author: "Luis", activeClaimant: "Luis", image: null, description: 'aluminum cans', batchLocation: "Herald Square", batchLocationNotes: "Left on first wooden bench next to clock pillar!", isSorted: true, isClaimed: true, createdAt: new Date(), updatedAt: new Date()},
  {objectId: 3, author: "Kessler", activeClaimant: "Kessler", image: null, description: 'mason jars', batchLocation: "Battery Park", batchLocationNotes: "Male wearing red hat will hand you purple colored bag of mason jars", isSorted: true, isClaimed: true, createdAt: new Date(), updatedAt: new Date()},
  {objectId: 4, author: "Kessler", activeClaimant: "Kessler", image: null, description: 'mixed plastic containers', batchLocation: "Central Park", batchLocationNotes: "Will leave white bag with red strings outside gate of The Loeb Boathouse", isSorted: false, isClaimed: true, createdAt: new Date(), updatedAt: new Date()},
  {objectId: 5, author: "Daniel", activeClaimant: "Daniel", image: null, description: 'bundle of dry wood', batchLocation: "1420 Samuels Street", batchLocationNotes: "Corner next to mailbox", isSorted: false, isClaimed: true, createdAt: new Date(), updatedAt: new Date()},
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
     await queryInterface.bulkInsert('Batches', BATCH
     );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
