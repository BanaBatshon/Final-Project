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
   await queryInterface.bulkInsert('tags', [
    {
      name: 'breakfast',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
     name: 'lunch',
     createdAt: new Date(),
     updatedAt : new Date()
    },
    {
     name: 'dinner',
     createdAt: new Date(),
     updatedAt : new Date()
    },
    {
     name: 'brunch',
     createdAt: new Date(),
     updatedAt : new Date()
    },
    {
     name: 'indian',
     createdAt: new Date(),
     updatedAt : new Date()
    },
    {
      name: 'italian',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'mediterranean',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'mexican',
      createdAt: new Date(),
      updatedAt : new Date()},
    {
      name: 'seafood',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'steakhouse',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'japanese',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'canadaian',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'northwest',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'fusion',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'american',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'lounge',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'farm-to-table',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'asia',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'comfort food',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'tapas',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'latin american',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'french',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'spanish',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'pizzeria',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'burger',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'sushi',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'pizza',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'donair',
      createdAt: new Date(),
      updatedAt : new Date()
    }
   ], {});

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
      name: 'Red Truck Beer’s Truck Stop',
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

    const burgerTagRows = await queryInterface.sequelize.query(
      `SELECT id from tags where name='burger';`
    );
    const burgerTagId = burgerTagRows[0][0].id;
    const restaurantId = restaurant[0][0].id;

   await queryInterface.bulkInsert('restauranttags', [
     {
       tagId: burgerTagId,
       restaurantId: restaurantId,
       createdAt: new Date(),
       updatedAt : new Date()
     }
   ], {})

   await queryInterface.bulkInsert('menuitems', [
    {
      name: 'The Pourhouse Burger',
      approved: true,
      restaurantId: restaurantId,
      createdAt: new Date(),
      updatedAt : new Date()
    }
   ], {})

    const pourhouseBurgerRows = await queryInterface.sequelize.query(
      `SELECT id from menuitems where name='The Pourhouse Burger';`
    );

    
    const pourhouseBurgerId = pourhouseBurgerRows[0][0].id;
    return await queryInterface.bulkInsert('menuitemtags', [
      {
        tagId: burgerTagId,
        menuItemId: pourhouseBurgerId,
        createdAt: new Date(),
        updatedAt : new Date()
      }
    ], {});
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   
   await queryInterface.bulkDelete('menuitems', null, {});
   await queryInterface.bulkDelete('tags', null, {});
   await queryInterface.bulkDelete('restaurants', null, {});

  }
};
