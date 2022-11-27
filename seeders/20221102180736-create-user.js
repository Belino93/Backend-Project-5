'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        "user_role": 1,
        "name": "Admin",
        "surname": "Istrator",
        "email": "Admin@admin.com",
        "password": "MNLxqrkaAz6iVe1sbtz6COWvm3YOZ7Xu5B3h6OL+7UjBJPhEJTRQMVl3XVqLmRDd3hkd8KzoPyIMwC54S0bt6w==",
        "createdAt":'9999-12-31 23:59:59',
        "updatedAt":'9999-12-31 23:59:59',
      },
      {
        "user_role": 2,
        "name": "User",
        "surname": 'Random',
        "email": "User@user.com",
        "password": "lxb8gw76c8X7FqW0kNAWa0Zs/nszj9hUmCpC222ybWRS8FBl9ZzOCcNJWjESzKGpRabts4cXhUjMEiaoN3xx2Q==",
        "createdAt":'9999-12-31 23:59:59',
        "updatedAt":'9999-12-31 23:59:59',
      }

    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
