import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
console.log('11111');

export const sequelize = new Sequelize(
    'first_db',
    'admin',
    'pirko9!abh',
    {
        dialect: "mysql",
        host: "database-4.cjmoksseckme.us-east-1.rds.amazonaws.com"
    }
);
console.log('2222222');

export const Message = sequelize.define('message', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
    },
    body: {
        type: DataTypes.STRING
    }
});
console.log('33333333');
