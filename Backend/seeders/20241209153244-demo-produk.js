
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produks', [
      {
        nama: 'Roti Coklat',
        harga: 12000,
        gambar: 'https://raw.githubusercontent.com/Zulfahluthfianafathiyah/Image/refs/heads/main/image10.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Kue Stroberi',
        harga: 30000,
        gambar: 'https://raw.githubusercontent.com/Zulfahluthfianafathiyah/Image/refs/heads/main/image10.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'cake Stroberi',
        harga: 30000,
        gambar: 'https://raw.githubusercontent.com/Zulfahluthfianafathiyah/Image/refs/heads/main/image10.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produks', null, {});
  }
};
