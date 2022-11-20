'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Articles_Lease', [
      {
        article_id: 2,
        lease_id: 1
      },
      {
        article_id: 24,
        lease_id: 1
      },
      {
        article_id: 21,
        lease_id: 2
      },
      {
        article_id: 13,
        lease_id: 2
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


