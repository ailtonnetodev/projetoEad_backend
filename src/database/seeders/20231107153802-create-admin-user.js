'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('112233', 10)

    await queryInterface.bulkInsert('users', [
      {
        first_name: 'Admin',
        last_name:'User',
        phone: '555-555',
        birth: '1990-01-23',
        email: 'admin@gmail.com',
        password: hashedPassword,
        role: 'admin',
        created_at : new Date(),
        updated_at :new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admin', null, { where: { email: 'admin@gmail.com' }})
  }
};
