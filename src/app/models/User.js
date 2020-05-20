import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        complement: Sequelize.STRING,
        city: Sequelize.STRING,
        zip_code: Sequelize.STRING,
        order_status: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
