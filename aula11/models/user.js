module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            allowEmpty: false,
            len: [6, 255]
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            allowEmpty: false,
            len: [6, 255]
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            allowEmpty: false,
            len: [6, 1024]
        }
    });

    return User;
};
