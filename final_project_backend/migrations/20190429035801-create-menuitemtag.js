'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('menuitemtags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      tagId :  {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "tags",
            schema: "public"
          },
          key: "id",
          onUpdate: "cascade",
          onDelete: "cascade"
        }
      }, 
      menuitemId :  {
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
    return queryInterface.dropTable('menuitemtags');
  }
};