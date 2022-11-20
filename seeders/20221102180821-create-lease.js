'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Leases', [
      {
        user_id: 1,
        movie_id: 1
      },
      {
        user_id: 2,
        movie_id: 1
      },
      {
        user_id: 1,
        movie_id: 4
      },
      {
        user_id: 1,
        movie_id: 8
      },
      {
        user_id: 2,
        movie_id: 3
      },
      {
        user_id: 2,
        movie_id: 12
      },
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
