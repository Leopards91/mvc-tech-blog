const { User } = require('../models');

const userData = [
    {
        username: "fakeuser_1",
        twitter: "fakeuser1",
        github: "fakeuser1",
        email: "fakemail1@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "fakeuser_2",
        twitter: "fakeuser2",
        github: "fakeuser2",
        email: "fakemail2@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "fakeuser_3",
        twitter: "fakeuser3",
        github: "fakeuser3",
        email: "fakemail3@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "fakeuser_4",
        twitter: "fakeuser4",
        github: "fakeuser4",
        email: "fakemail4@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "fakeuser_5",
        twitter: "fakeuser5",
        github: "fakeuser5",
        email: "fakemail5@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "fakeuser_6",
        twitter: "fakeuser6",
        github: "fakeuser6",
        email: "fakemail6@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;