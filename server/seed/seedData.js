const db = require('../config/connection');
const { User } = require('../models');
const faker = require('faker');
const mongoose = require('mongoose');

db.once('open', async () => {
  try {

      // > Create seed data for users using faker library. Create a firstName, lastName, email, username, and password for each user.
      const users = [];
      for (let i = 0; i < process.argv[2]; i++) {
            const user = {
                  firstName: faker.name.firstName(),
                  lastName: faker.name.lastName(),
                  email: faker.internet.email(),
                  username: faker.internet.userName(),
                  password: faker.internet.password(),
                  games: [],
            };
            users.push(user);
      }
      // await User.insertMany(users);
      User.create(users);
      console.log(users);
      console.log(`${process.argv[2]} Users seeded!`);

} catch (err) {
      console.log(err);
}});
