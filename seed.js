const db = require('./api/models');
const { User, Batch } = db;
​
const USER = [
  {id: 1, firstName: 'Luis', lastName: 'Brito', password: 'JohnJay', phoneNumber: 1234567890, email: 'luis@johnjaymail.com', streetAddress: '123 Francis Street', city: 'New York', zipCode: '10018', updatedAt: new Date()},
  {id: 2, firstName: 'Kessler', lastName: 'Lock', password: 'Queens', phoneNumber: 1234567891, email: 'kessler@queensmail.com', streetAddress: '456  Adams Street', city: 'New York', zipCode: '10019', updatedAt: new Date()},
  {id: 3, firstName: 'Daniel', lastName: 'Li', password: 'Baruch', phoneNumber: 1234567892, email: 'daniel@baruchmail.com', streetAddress: '789 Taylor Street', city: 'New York', zipCode: '10020', updatedAt: new Date()},
];
​
const BATCH = [
  {objectId: 1, author: "Luis", activeClaimant: "Luis", image: NULL, description: 'wine bottles', batchLocation: "Time Square", batchLocationNotes: "Find Woody", isSorted: true, isClaimed: true},
  {objectId: 2, author: "Luis", activeClaimant: "Luis", image: NULL, description: 'aluminum cans', batchLocation: "Herald Square", batchLocationNotes: "Left on first wooden bench next to clock pillar!", isSorted: true, isClaimed: true},
  {objectId: 3, author: "Kessler", activeClaimant: "Kessler", image: NULL, description: 'mason jars', batchLocation: "Battery Park", batchLocationNotes: "Male wearing red hat will hand you purple colored bag of mason jars", isSorted: true, isClaimed: true},
  {objectId: 4, author: "Kessler", activeClaimant: "Kessler", image: NULL, description: 'mixed plastic containers', batchLocation: "Central Park", batchLocationNotes: "Will leave white bag with red strings outside gate of The Loeb Boathouse", isSorted: false, isClaimed: true},
  {objectId: 5, author: "Daniel", activeClaimant: "Daniel", image: NULL, description: 'bundle of dry wood', batchLocation: "1420 Samuels Street", batchLocationNotes: "Corner next to mailbox", isSorted: false, isClaimed: true},
];
​
const seed = () => {
  return db.sequelize.sync({force: true})
    .then(() => {
      // Create all the entries
      let userPromises = USER.map(u => User.create(u));
      let batchPromises = BATCH.map(b => Batch.create(b));
      return Promise.all([...userPromises, ...batchPromises]);
    })
    /*
    .then(() => {
      // Create the associations
      let associationPromises = MOVIES_ACTORS.map(ma => {
        let moviePromise = Movie.findByPk(ma.movieId);
        let actorPromise = Actor.findByPk(ma.actorId);
        return Promise.all([moviePromise, actorPromise])
          .then(([movie, actor]) => {
            return movie.addActor(actor);
          })
      });
      return Promise.all(associationPromises);
    })*/.then(() => {
      /*
        Postgres only fix:
          Since we provided fixed id's for our seed data,
          we have to reset our id sequences in postgres.
          (ONLY do this for Models with autoincrementing id's)
      */
      let userReset = db.sequelize.query(`select setval('users_id_seq', (select max(id) from users), true);`)
      let batchReset = db.sequelize.query(`select setval('batches_id_seq', (select max(id) from batches), true);`)
​
      return Promise.all([userReset, batchReset])
    });
}
​
module.exports = seed;