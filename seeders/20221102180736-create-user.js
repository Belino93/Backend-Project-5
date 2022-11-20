'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        "user_role": 1,
        "user_id": 1,
        "name": "Admin",
        "email": "Admin@admin.com",
        "password": "MNLxqrkaAz6iVe1sbtz6COWvm3YOZ7Xu5B3h6OL+7UjBJPhEJTRQMVl3XVqLmRDd3hkd8KzoPyIMwC54S0bt6w=="
      },
      {
        "user_role": 2,
        "user_id": 2,
        "name": "User",
        "email": "User@user.com",
        "password": "lxb8gw76c8X7FqW0kNAWa0Zs/nszj9hUmCpC222ybWRS8FBl9ZzOCcNJWjESzKGpRabts4cXhUjMEiaoN3xx2Q=="
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
