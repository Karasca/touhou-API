'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'Characters',
          'familyNameR',
          {
            type: Sequelize.DataTypes.STRING,
          },
          {transaction: t},

        ),
        queryInterface.addColumn(
          'Characters',
          'firstNameR',
          {
            type: Sequelize.DataTypes.STRING,
          },
          {transaction: t},
        ),
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.sequelize.transaction(t=>{
      return Promise.all([
        queryInterface.removeColumn('Characters', 'familyNameR', {transaction: t}),
        queryInterface.removeColumn('Characters', 'firstNameR', {transaction: t}),
      ]);
    });
  },
};
