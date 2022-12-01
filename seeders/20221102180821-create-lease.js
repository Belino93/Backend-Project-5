'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Leases', [
      {
        user_id: 1,
        movie_id: 1,
        // "createdAt":'9999-12-31 23:59:59',
        // "updatedAt":'9999-12-31 23:59:59',
      },
      {
        user_id: 2,
        movie_id: 1,
        // "createdAt":'9999-12-31 23:59:59',
        // "updatedAt":'9999-12-31 23:59:59',
      },
      {
        user_id: 1,
        movie_id: 4,
        // "createdAt":'9999-12-31 23:59:59',
        // "updatedAt":'9999-12-31 23:59:59',
      },
      {
        user_id: 1,
        movie_id: 8,
        // "createdAt":'9999-12-31 23:59:59',
        // "updatedAt":'9999-12-31 23:59:59',
      },
      {
        user_id: 2,
        movie_id: 3,
        // "createdAt":'9999-12-31 23:59:59',
        // "updatedAt":'9999-12-31 23:59:59',
      },
      {
        user_id: 2,
        movie_id: 12,
        // "createdAt":'9999-12-31 23:59:59',
        // "updatedAt":'9999-12-31 23:59:59',
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
