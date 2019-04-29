'use strict';

module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   await queryInterface.bulkInsert('restaurants', [
    {
      name: 'Pourhouse',
      address: '162 Water St, Vancouver, BC V6B 1B2',
      phone_number:	'(604) 568-7022',
      website:	'pourhousevancouver.com',
      approved: true,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Moderne Burger',
      address: '865 W Broadway, Vancouver, BC V5Z 1J9',
      phone_number:	'(604) 739-0005',
      website:	'moderneburger.com',
      approved: true,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Red Truck Beer’s Truck Stop		',
      address: '295 E 1st Ave, Vancouver, BC V5T 1A7',
      phone_number:	'(604) 682-4733',
      website:	'',
      approved: true,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Campagnolo',
      address: '1020 Main St, Vancouver, BC V6A 2W1',
      phone_number:	'(604) 484-6018',
      website:	'campagnolorestaurant.ca',
      approved: true,
      createdAt: new Date(),
      updatedAt : new Date()
    }
   ], {});

   const restaurant = await queryInterface.sequelize.query(
    `SELECT id from restaurants where name='Pourhouse';`
  );

   const restaurantRows = restaurant[0];
   return await queryInterface.bulkInsert('menuitems', [
    {
      name: 'The Pourhouse Burger',
      approved: true,
      restaurantId: restaurantRows[0].id,
      createdAt: new Date(),
      updatedAt : new Date()
    }
   ], {})
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   await queryInterface.bulkDelete('restaurants', null, {});
   await queryInterface.bulkDelete('menuitems', null, {});
  }
};
