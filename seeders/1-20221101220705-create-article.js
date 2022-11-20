'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Articles', [
      {
        article_id: 1
      },
      {
        article_id: 2
      },
      {
        article_id: 3
      },
      {
        article_id: 4
      },
      {
        article_id: 5
      },
      {
        article_id: 6
      },
      {
        article_id: 7
      },
      {
        article_id: 8
      },
      {
        article_id: 9
      },
      {
        article_id: 10
      },
      {
        article_id: 11
      },
      {
        article_id: 12
      },
      {
        article_id: 13
      },
      {
        article_id: 14
      },
      {
        article_id: 15
      },
      {
        article_id: 16
      },
      {
        article_id: 17
      },
      {
        article_id: 18
      },
      {
        article_id: 19
      },
      {
        article_id: 20
      },
      {
        article_id: 21
      },
      {
        article_id: 22
      },
      {
        article_id: 23
      },
      {
        article_id: 24
      },
      {
        article_id: 25
      },
      {
        article_id: 26
      },
      {
        article_id: 27
      },
      {
        article_id: 28
      },
      {
        article_id: 29
      },
      {
        article_id: 30
      },
      {
        article_id: 31
      },
      {
        article_id: 32
      },
      {
        article_id: 33
      },
      {
        article_id: 34
      },
      {
        article_id: 35
      },
      {
        article_id: 36
      },
      {
        article_id: 37
      },
      {
        article_id: 38
      },
      {
        article_id: 39
      },
      {
        article_id: 40
      },
      {
        article_id: 41
      },
      {
        article_id: 42
      },
      {
        article_id: 43
      },
      {
        article_id: 44
      },
      {
        article_id: 45
      },
      {
        article_id: 46
      },
      {
        article_id: 47
      },
      {
        article_id: 48
      },
      {
        article_id: 49
      },
      {
        article_id: 50
      },
      {
        article_id: 51
      },
      {
        article_id: 52
      },
      {
        article_id: 53
      },
      {
        article_id: 54
      },
      {
        article_id: 55
      },
      {
        article_id: 56
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
