'use strict';

const BATCH = [
  {image: null, title: 'Wine Bottles', description: 'This is a bag of 20 bottles.....', location: "Time Square", address: '123 Main St', locationNotes: "Find Woody", isSorted: true, isClaimed: false, updatedAt: new Date(), createdAt: new Date(), authorId: 1,
  },
  {image: null, title: 'Aluminum Cans', description: 'aluminum cans and other stuff that I didnt need anymore', location: "Herald Square", address: '123 John Edwards St', locationNotes: "Left on first wooden bench next to clock pillar!", isSorted: false, isClaimed: true, updatedAt: new Date(), createdAt: new Date(),
},
  {image: null, title: 'Aluminum Cans', description: 'some description......', location: "Unnion Square", address: '109 Queens St', locationNotes: "some notes......", isSorted: true, isClaimed: false, updatedAt: new Date(), createdAt: new Date(),
},
  {image: null, title: 'Plastic', description: '', location: "The Bronx", address: '345 John jay St', locationNotes: "some notes......", isSorted: true, isClaimed: true, updatedAt: new Date(), createdAt: new Date(),
},
  {image: null, title: 'A title', description: 'aluminum cans and other stuff that I didnt need anymore', location: "Brooklyn", address: '456 Randome st', locationNotes: "some notes......", isSorted: true, isClaimed: true, updatedAt: new Date(), createdAt: new Date(),
},
  {image: null, title: 'Title 234', description: 'some description......', location: "Unnion Square", address: '109 Queens St', locationNotes: "some notes......", isSorted: true, isClaimed: true, updatedAt: new Date(), createdAt: new Date(),
}
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
     await queryInterface.bulkInsert('Batches', BATCH);
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
