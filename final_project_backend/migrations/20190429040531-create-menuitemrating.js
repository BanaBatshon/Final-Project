'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('menuitemratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId :  {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "users",
            schema: "public"
          },
          key: "id",
          onUpdate: "cascade",
          onDelete: "cascade"
        }
      },
      menuItemId :  {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "menuitems",
            schema: "public"
          },
          key: "id",
          onUpdate: "cascade",
          onDelete: "cascade"
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('menuitemratings');
  }
};