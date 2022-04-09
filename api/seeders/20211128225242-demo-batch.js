'use strict';

const BATCH = [
  {image: 'https://wine-pages.com/wp-content/uploads/2016/11/Lots-of-Wine-Bottles-LOT.jpg', title: 'Wine Bottles', description: 'These are opened wine bottles from an outdoor catering event last weekend. The leftover wine will be poured out.', location: "Time Square", address: '701 7th Ave, New York, NY 10036', locationNotes: "The Terrace and Outdoor Gardens: Ask for Manager Woody", isSorted: true, isClaimed: false, updatedAt: new Date(), createdAt: new Date(), authorId: 1,
  },
  {image: 'https://www.gwinnettrecycles.com/wp-content/uploads/2019/07/New-uses-for-recyclables-1150x863.jpg', title: 'Assortment of Arts & Crafts supplies', description: 'Finished my art degree and will need to purchase new supplies for work. Would love to give these away!', location: "Union Square", address: '201 Park Ave S, New York NY 10003', locationNotes: "NYU Resident's Halls. I will be by the revolving doors at 1:30pm on Thursdays. Let me know you're from ReClaim", isSorted: false, isClaimed: true, updatedAt: new Date(), createdAt: new Date(),
},
  {image: 'https://static-nexus.prod.postmedia.digital/wp-content/uploads/2020/03/BI.LDN20110727SRboxgood.jpg', title: 'Newspapers', description: 'My husband reads the paper every morning and I go through a lot of magazines. We currently have a batch that we would like to dispose of the paper properly. See picture. :)', location: "Brooklyn", address: '56 Richards St, Brooklyn, New York 11256', locationNotes: "We will leave them on the corner next to the USPS mailbox on Sunday", isSorted: true, isClaimed: false, updatedAt: new Date(), createdAt: new Date(),
},
  {image: 'https://news.unl.edu/sites/default/files/styles/large_aspect/public/PA240015_0.jpg?itok=6JKi1M86', title: 'Plastic Bottles', description: "I'm a superintendent at a high school looking for help to recycle! I collect more plastic bottles a week than I can handle...willing to give away half (about 150 bottles)", location: "The Bronx", address: '345 John Jay St, The Bronx, New York 10453', locationNotes: "Walk through the parking lot to the back of the school near the track field. My last round is at 5pm. See you then.", isSorted: false, isClaimed: true, updatedAt: new Date(), createdAt: new Date(),
},
  {image: 'https://recyclenation.com/wp-content/uploads/2014/03/aluminum-can-recycling.jpg', title: 'Aluminum Cans', description: "Three bags of aluminum soda cans. About 50 per bag. Wish I could go recycle these myself but I'm too busy", location: "Herald Square", address: '1 Herald Square, New York, NY 10001', locationNotes: "Left on first wooden bench next to clock pillar! (James Gordon Bennett Memorial)", isSorted: true, isClaimed: true, updatedAt: new Date(), createdAt: new Date(),
},
  {image: 'https://storage.googleapis.com/recliampictures/r1.png', title: 'Cans and Bottles', description: 'Container full of cans and bottles', location: "125 E St", address: '4567 Broadway Ave, New York, NY 11023', locationNotes: "Red house in the corner, you'll see the blue plastic container right outside.", isSorted: false, isClaimed: true, updatedAt: new Date(), createdAt: new Date(),
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
