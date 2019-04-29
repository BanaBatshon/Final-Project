'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('restaurantratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      liked: {
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
      restaurantId :  {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "restaurants",
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
    return queryInterface.dropTable('restaurantratings');
  }
};