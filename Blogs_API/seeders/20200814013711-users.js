module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        id: 1,
        displayName: 'Brett Wiltshire',
        email: 'brett@email.com',
        password: '123456',
        image: 'http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png',
      },
    ],
    {},
  ),

  down: async (queryInterface, _Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
