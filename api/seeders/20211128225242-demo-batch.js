'use strict';

const BATCH = [
  {image: 'https://clipground.com/images/recyclable-logo-3.jpg', title: 'Wine Bottles', description: 'This is a bag of 20 bottles.....', location: "Time Square", address: '123 Main St', locationNotes: "Find Woody", isSorted: true, isClaimed: false, updatedAt: new Date(), createdAt: new Date(), authorId: 1,
  },
  {image: 'https://recyclenation.com/wp-content/uploads/2014/03/aluminum-can-recycling.jpg', title: 'Aluminum Cans', description: 'aluminum cans and other stuff that I didnt need anymore', location: "Herald Square", address: '123 John Edwards St', locationNotes: "Left on first wooden bench next to clock pillar!", isSorted: false, isClaimed: true, updatedAt: new Date(), createdAt: new Date(),
},
  {image: 'https://www.gwinnettrecycles.com/wp-content/uploads/2019/07/New-uses-for-recyclables-1150x863.jpg', title: 'Some Useful ITems', description: 'some description......', location: "Unnion Square", address: '109 Queens St', locationNotes: "some notes......", isSorted: true, isClaimed: false, updatedAt: new Date(), createdAt: new Date(),
},
  {image: 'https://news.unl.edu/sites/default/files/styles/large_aspect/public/PA240015_0.jpg?itok=6JKi1M86', title: 'Plastic', description: '', location: "The Bronx", address: '345 John jay St', locationNotes: "some notes......", isSorted: true, isClaimed: true, updatedAt: new Date(), createdAt: new Date(),
},
  {image: 'https://static-nexus.prod.postmedia.digital/wp-content/uploads/2020/03/BI.LDN20110727SRboxgood.jpg', title: 'A title', description: 'aluminum cans and other stuff that I didnt need anymore', location: "Brooklyn", address: '456 Randome st', locationNotes: "some notes......", isSorted: true, isClaimed: true, updatedAt: new Date(), createdAt: new Date(),
},
  {image: 'https://www.washingtonian.com/wp-content/uploads/2018/02/RecyclingFeatured.jpg', title: 'Title 234', description: 'some description......', location: "Unnion Square", address: '109 Queens St', locationNotes: "some notes......", isSorted: true, isClaimed: true, updatedAt: new Date(), createdAt: new Date(),
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
